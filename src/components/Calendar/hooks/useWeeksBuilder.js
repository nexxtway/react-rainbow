import React, { useMemo } from 'react';
import { addDays } from '../helpers';
import Week from '../week';

export default function useWeeksBuilder(
    value,
    firstDayMonth,
    lastDayMonth,
    minDate,
    maxDate,
    onChange,
) {
    return useMemo(() => {
        let date = new Date(firstDayMonth);
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
                    value={value}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    firstDayMonth={firstDayMonth}
                    lastDayMonth={lastDayMonth}
                    key={date.getTime()}
                    onChange={onChange}
                />,
            );

            date = addDays(date, 7);
        }
        return weeks;
    }, [value, firstDayMonth, lastDayMonth, minDate, maxDate, onChange]);
}
