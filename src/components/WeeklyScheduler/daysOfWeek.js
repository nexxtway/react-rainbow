import React from 'react';
import { PropTypes } from 'prop-types';
import StyledHeaderDays from './styled/headerDays';
import { addDays } from './helpers';
import StyledDay from './styled/day';

export default function DaysOfWeek({ locale, currentWeek }) {
    function Days() {
        let date = new Date(currentWeek);
        const days = [];

        for (let i = 0; i < 7; i += 1) {
            days.push(
                <StyledHeaderDays scope="col">
                    {new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric' }).format(
                        date,
                    )}
                </StyledHeaderDays>,
            );
            date = addDays(date, 1);
        }
        return days;
    }
    return (
        <thead>
            <tr>
                <StyledDay>Hr</StyledDay>
                <Days />
            </tr>
        </thead>
    );
}

DaysOfWeek.propTypes = {
    locale: PropTypes.string,
    currentWeek: PropTypes.instanceOf(Date),
};

DaysOfWeek.defaultProps = {
    locale: undefined,
    currentWeek: undefined,
};
