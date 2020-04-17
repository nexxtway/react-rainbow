import React from 'react';
import PropTypes from 'prop-types';
import { useEventsOfDay } from './hooks';
import Event from './event';
import StyledDay from './styled/day';

export default function Day(props) {
    const { day, events, onEventClick, locale } = props;
    const eventsOfDay = useEventsOfDay(events, day);
    const Events = () =>
        eventsOfDay.map(event => (
            <Event key={event.id} onEventClick={onEventClick} locale={locale} {...event} />
        ));

    return (
        <StyledDay>
            <Events />
        </StyledDay>
    );
}

Day.propTypes = {
    day: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    onEventClick: PropTypes.func,
    locale: PropTypes.string,
};

Day.defaultProps = {
    day: undefined,
    events: [],
    onEventClick: () => {},
    locale: undefined,
};
