import React, { useMemo } from 'react';
import { addDays, shouldDateBeSelected, isDateWithinRange, isSameDay } from '../helpers';

export default function useDaysBuilder(Component, props) {
    const {
        startDate,
        endDate,
        firstDayMonth,
        lastDayMonth,
        minDate,
        maxDate,
        selectionType,
        value,
        selectedRange,
        currentRange,
        onChange,
    } = props;
    return useMemo(() => {
        let date = new Date(startDate);
        const days = [];

        let index = 0;
        while (date <= endDate) {
            days.push(
                <Component
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
                />,
            );
            date = addDays(date, 1);
            index += 1;
        }
        return days;
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
