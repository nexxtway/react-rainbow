import React from 'react';
import PropTypes from 'prop-types';
import getLastDayMonth from './helpers/get-last-day-month';
import addDays from './helpers/add-days';
import Week from './week';

export default function Month(props) {
    const {
        firstDayMonth,
        value,
        minDate,
        maxDate,
        onChange,
    } = props;
    const lastDayMonth = getLastDayMonth(firstDayMonth);
    let date = new Date(firstDayMonth);

    function Weeks() {
        const weeks = [];
        const dayOfWeek = date.getDay();
        const daysAfter = 6 - dayOfWeek;
        while (date <= lastDayMonth || addDays(date, -dayOfWeek) <= lastDayMonth) {
            const startDate = addDays(date, -dayOfWeek);
            const endDate = addDays(date, daysAfter);
            weeks.push(
                <Week
                    value={value}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    firstDayMonth={firstDayMonth}
                    key={date.getDate()}
                    onChange={onChange}
                />,
            );
            date = addDays(date, 7);
        }
        return weeks;
    }

    return (
        <tbody>
            <Weeks />
        </tbody>
    );
}

Month.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

Month.defaultProps = {
    firstDayMonth: new Date(2019, 2, 1),
    minDate: undefined,
    maxDate: undefined,
    value: undefined,
    onChange: () => {},
};
