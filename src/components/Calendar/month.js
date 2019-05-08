import React from 'react';
import PropTypes from 'prop-types';
import { addDays, getLastDayMonth } from './helpers';
import Week from './week';

export default function Month(props) {
    const { firstDayMonth, value, minDate, maxDate, onChange } = props;
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
                    key={date.getTime()}
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
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func,
};

Month.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    value: undefined,
    onChange: () => {},
};
