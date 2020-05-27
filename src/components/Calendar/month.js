import React from 'react';
import PropTypes from 'prop-types';
import { addDays, getLastDayMonth } from './helpers';
import Week from './week';

export default function Month(props) {
    const { firstDayMonth, value, minDate, maxDate, onChange } = props;

    const date = new Date(firstDayMonth);
    const lastDayMonth = getLastDayMonth(firstDayMonth);
    const dayOfWeek = date.getDay();
    const totalWeeks = (lastDayMonth.getDate() + dayOfWeek + 6 - lastDayMonth.getDay()) / 7;
    const week = addDays(date, -dayOfWeek);

    const weeks = Array.from(Array(totalWeeks), (_, index) => {
        const startDate = addDays(week, 7 * index);
        const endDate = addDays(startDate, 6);

        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(11, 59, 59, 999);
        return (
            <Week
                value={value}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                maxDate={maxDate}
                firstDayMonth={firstDayMonth}
                lastDayMonth={lastDayMonth}
                key={startDate.getTime()}
                onChange={onChange}
            />
        );
    });

    return <tbody>{weeks}</tbody>;
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
