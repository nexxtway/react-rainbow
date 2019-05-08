import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from './helpers';
import Day from './day';

export default function Week(props) {
    const { value, startDate, endDate, minDate, maxDate, firstDayMonth, onChange } = props;

    function Days() {
        let date = new Date(startDate);
        const days = [];

        while (date <= endDate) {
            days.push(
                <Day
                    date={date}
                    firstDayMonth={firstDayMonth}
                    key={date.getTime()}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={onChange}
                    isSelected={isSameDay(date, value)}
                />,
            );
            date = addDays(date, 1);
        }
        return days;
    }

    return (
        <tr>
            <Days />
        </tr>
    );
}

Week.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func,
};

Week.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    startDate: undefined,
    endDate: undefined,
    value: undefined,
    onChange: () => {},
};
