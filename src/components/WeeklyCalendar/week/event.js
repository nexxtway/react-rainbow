import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import {
    useEventStyle,
    useEventDuration,
    useFormattedEventTimeRange,
    useFormattedEventStartDate,
} from './hooks';
import StyledEvent from './styled/event';
import StyledEventItem from './styled/eventItem';
import StyledEventTitle from './styled/eventTitle';
import RenderIf from '../../RenderIf';

export default function Event(props) {
    const { onEventClick, locale, ...event } = props;
    const { title, startDate, endDate, color, backgroundColor } = event;
    const eventId = useUniqueIdentifier('calendar-event');
    const duration = useEventDuration(startDate, endDate);
    const style = useEventStyle(startDate, duration);
    const formattedTimeRange = useFormattedEventTimeRange(startDate, endDate, locale);
    const formattedStartDate = useFormattedEventStartDate(startDate, locale);

    return (
        <StyledEvent
            id={eventId}
            style={style}
            color={color}
            backgroundColor={backgroundColor}
            onClick={() => onEventClick(event)}
        >
            <StyledEventItem>
                <StyledEventTitle>{title}</StyledEventTitle>
                <RenderIf isTrue={duration < 60}>
                    <span>,&nbsp;</span>
                    <span>{formattedStartDate}</span>
                </RenderIf>
            </StyledEventItem>
            <RenderIf isTrue={duration >= 60}>
                <StyledEventItem>{formattedTimeRange}</StyledEventItem>
            </RenderIf>
        </StyledEvent>
    );
}

Event.propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onEventClick: PropTypes.func,
    locale: PropTypes.string,
};

Event.defaultProps = {
    onEventClick: () => {},
    locale: undefined,
    color: undefined,
    backgroundColor: undefined,
};
