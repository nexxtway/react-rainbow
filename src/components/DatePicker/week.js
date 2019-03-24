import React from 'react';
import PropTypes from 'prop-types';
import addDays from './helpers/add-days';
import isSameDay from './helpers/is-same-day';
import Day from './day';

export default function Week(props) {
    const {
        value,
        startDate,
        endDate,
        firstDayMonth,
        onChange,
    } = props;
    function Days() {
        let date = new Date(startDate);
        const days = [];

        while (date <= endDate) {
            days.push(
                <Day date={date}
                    firstDayMonth={firstDayMonth}
                    key={date.getDate()}
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
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

Week.defaultProps = {
    firstDayMonth: new Date(2019, 2, 1),
    startDate: undefined,
    endDate: undefined,
    value: undefined,
    onChange: () => {},
};
