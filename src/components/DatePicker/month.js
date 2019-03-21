import React from 'react';
import classnames from 'classnames';
import getLastDayMonth from './helpers/get-last-day-month';
import addDays from './helpers/add-days';
import isSameDay from './helpers/is-same-day';

function Day({ date, firstDayMonth, onChange, isSelected }) {
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    if (isAdjacentDate) {
        return (
            <td className="rainbow-date-picker_calendar-day">
                <span className="rainbow-date-picker_calendar-day-adjacent">{day}</span>
            </td>
        );
    }
    const buttonClassNames = classnames({
        'rainbow-date-picker_calendar-day-button': true,
        'rainbow-date-picker_calendar-day-button--selected': isSelected,
    });
    return (
        <td className="rainbow-date-picker_calendar-day">
            <button
                onClick={() => onChange(new Date(date))}
                className={buttonClassNames}>
                {day}
            </button>
        </td>
    );
}

function Week(props) {
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

export default function Month(props) {
    const {
        firstDayMonth = new Date(2019, 2, 1),
        value,
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
