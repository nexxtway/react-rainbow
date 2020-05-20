import React, { useMemo } from 'react';
import { addDays, shouldDateBeSelected, isDateWithinRange, isSameDay } from '../helpers';
import Day from '../day';

export default function useDaysBuilder(
    value,
    startDate,
    endDate,
    minDate,
    maxDate,
    firstDayMonth,
    lastDayMonth,
    onChange,
    currentRange,
    selectionType,
    selectedRange,
) {
    return useMemo(() => {
        const daysDiff = endDate.getDay() - startDate.getDay() + 1;
        return Array.from(Array(daysDiff), (_, index) => {
            const date = addDays(startDate, index);
            return (
                <Day
                    date={date}
                    firstDayMonth={firstDayMonth}
                    key={date.getTime()}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={onChange}
                    isSelected={shouldDateBeSelected(date, value, selectionType, selectedRange)}
                    isWithinRange={isDateWithinRange(date, currentRange)}
                    isFirstDayOfWeek={index === 0 || isSameDay(date, firstDayMonth)}
                    isLastDayOfWeek={index === 6 || isSameDay(date, lastDayMonth)}
                />
            );
        });
    }, [
        currentRange,
        endDate,
        firstDayMonth,
        lastDayMonth,
        maxDate,
        minDate,
        onChange,
        selectedRange,
        selectionType,
        startDate,
        value,
    ]);
}
