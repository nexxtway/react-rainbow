import React, { useMemo } from 'react';
import { addDays, getLastDayMonth } from '../helpers';
import Week from '../week';

export default function useWeeksBuilder(value, firstDayMonth, minDate, maxDate, onChange) {
    return useMemo(() => {
        const date = new Date(firstDayMonth);
        const lastDayMonth = getLastDayMonth(firstDayMonth);
        const dayOfWeek = date.getDay();
        const totalWeeks = (lastDayMonth.getDate() + dayOfWeek + 6 - lastDayMonth.getDay()) / 7;
        const week = addDays(date, -dayOfWeek);

        return Array.from(Array(totalWeeks), (_, index) => {
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
    }, [value, firstDayMonth, minDate, maxDate, onChange]);
}
