import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { useEventStyle, useFormattedEventDates } from './hooks';
import StyledEvent from './styled/event';
import StyledEventDates from './styled/eventDates';
import StyledEventTitle from './styled/eventTitle';

export default function Event(props) {
    const { onEventClick, locale, ...event } = props;
    const { title, startDate, endDate } = event;
    const eventId = useUniqueIdentifier('calendar-event');
    const style = useEventStyle(startDate, endDate);
    const dates = useFormattedEventDates(startDate, endDate, locale);

    return (
        <StyledEvent id={eventId} style={style} onClick={() => onEventClick(event)}>
            <StyledEventTitle>{title}</StyledEventTitle>
            <StyledEventDates>{dates}</StyledEventDates>
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
