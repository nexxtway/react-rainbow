import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { useEventDuration, useEventStyle } from './hooks';
import RenderIf from '../../RenderIf';
import StyledEvent from './styled/event';
import StyledEventDates from './styled/eventDates';
import StyledEventTitle from './styled/eventTitle';

export default function Event(props) {
    const { title, startDate, endDate, onEventClick, locale } = props;
    const eventId = useUniqueIdentifier('calendar-event');
    const duration = useEventDuration(startDate, endDate);
    const style = useEventStyle(duration, startDate);

    return (
        <StyledEvent id={eventId} style={style} onClick={onEventClick}>
            <RenderIf isTrue={duration >= 30}>
                <StyledEventDates>
                    {`${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    }).format(startDate)} - ${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    }).format(endDate)}`}
                </StyledEventDates>
            </RenderIf>
            <StyledEventTitle>{title}</StyledEventTitle>
        </StyledEvent>
    );
}

Event.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
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
