import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { useEventDuration, useEventStyle, useFormattedEventDates } from './hooks';
import RenderIf from '../../RenderIf';
import StyledEvent from './styled/event';
import StyledEventDates from './styled/eventDates';
import StyledEventTitle from './styled/eventTitle';

export default function Event(props) {
    const { onEventClick, locale, ...event } = props;
    const { title, startDate, endDate } = event;
    const eventId = useUniqueIdentifier('calendar-event');
    const duration = useEventDuration(startDate, endDate);
    const style = useEventStyle(duration, startDate);
    const dates = useFormattedEventDates(startDate, endDate, locale);

    return (
        <StyledEvent id={eventId} style={style} onClick={() => onEventClick(event)}>
            <RenderIf isTrue={duration >= 30}>
                <StyledEventDates>{dates}</StyledEventDates>
            </RenderIf>
            <StyledEventTitle>{title}</StyledEventTitle>
        </StyledEvent>
    );
}

Event.propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    onEventClick: PropTypes.func,
    locale: PropTypes.string,
};

Event.defaultProps = {
    title: undefined,
    startDate: undefined,
    endDate: undefined,
    onEventClick: () => {},
    locale: undefined,
};
