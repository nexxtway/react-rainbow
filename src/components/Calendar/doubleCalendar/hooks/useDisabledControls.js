import { useMemo } from 'react';
import { addMonths, getLastDayMonth } from '../../helpers';

export default function useDisabledControls(
    yearsRange,
    minDate,
    maxDate,
    currentMonth,
    rightCalendarMonth,
) {
    return useMemo(() => {
        const lastDayMonth = getLastDayMonth(addMonths(currentMonth, -1));
        const lastYearItem = yearsRange[yearsRange.length - 1];
        const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
        const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
        const disableNextMonth = addMonths(rightCalendarMonth, 1) > maxSelectableDate;
        const disablePreviousMonth = lastDayMonth < minSelectableDate;
        return [disablePreviousMonth, disableNextMonth];
    }, [currentMonth, maxDate, minDate, rightCalendarMonth, yearsRange]);
}
