import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { addDays, getLastDayMonth } from '../Calendar/helpers';
import Week from './week';

export default function Month(props) {
    const { firstDayMonth, selectedDate, minDate, maxDate, onSelectDate } = props;
    let date = new Date(firstDayMonth);
    const lastDayMonth = useMemo(() => getLastDayMonth(firstDayMonth), [firstDayMonth]);

    function Weeks() {
        const weeks = [];
        const dayOfWeek = date.getDay();
        const daysAfter = 6 - dayOfWeek;
        while (date <= lastDayMonth || addDays(date, -dayOfWeek) <= lastDayMonth) {
            const startDate = addDays(date, -dayOfWeek);
            const endDate = addDays(date, daysAfter);

            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(11, 59, 59, 999);

            weeks.push(
                <Week
                    selectedDate={selectedDate}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    firstDayMonth={firstDayMonth}
                    key={date.getTime()}
                    onSelectDate={onSelectDate}
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
    selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onSelectDate: PropTypes.func,
};

Month.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    selectedDate: undefined,
    onSelectDate: () => {},
};
