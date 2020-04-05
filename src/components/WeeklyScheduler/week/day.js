/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getEventsOfDay } from '../helpers';
import Event from './event';
import StyledDay from './styled/day';

export default function Day(props) {
    const { day, events, locale } = props;
    const eventsOfDay = useMemo(() => getEventsOfDay(events, day), [day, events]);
    const Events = () =>
        // eslint-disable-next-line react/no-array-index-key
        eventsOfDay.map((event, index) => <Event key={index} locale={locale} {...event} />);

    return (
        <StyledDay>
            <Events />
        </StyledDay>
    );
}

Day.propTypes = {
    day: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    locale: PropTypes.string,
};

Day.defaultProps = {
    day: undefined,
    events: [],
    locale: undefined,
};
