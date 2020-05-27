import { useCallback } from 'react';
import {
    addMonths,
    isDateBelowLimit,
    isDateBeyondLimit,
    getFirstDayMonth,
    getCalendarBounds,
} from '../../helpers';

export default function useMoveFocusedMonthFunction(focusedDate, minDate, maxDate) {
    return useCallback(
        increment => {
            const { minCalendarDate, maxCalendarDate } = getCalendarBounds(minDate, maxDate);
            const nextFocusedDate = addMonths(focusedDate, increment);
            if (isDateBelowLimit(nextFocusedDate, minCalendarDate))
                return {
                    day: minCalendarDate,
                    month: getFirstDayMonth(minCalendarDate),
                };
            if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate))
                return {
                    day: maxCalendarDate,
                    month: getFirstDayMonth(maxCalendarDate),
                };
            return {
                day: nextFocusedDate,
                month: getFirstDayMonth(nextFocusedDate),
            };
        },
        [focusedDate, minDate, maxDate],
    );
}
