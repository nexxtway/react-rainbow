import { useMemo } from 'react';
import { addWeeks } from '../helpers';

export default function useDisabledControls(yearsRange, week, minDate, maxDate) {
    return useMemo(() => {
        const lastYearItem = yearsRange[yearsRange.length - 1];
        const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
        const isDisableNext = addWeeks(week, 1) > maxSelectableDate;
        const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
        const prevDate = addWeeks(week, -1);
        const isDisablePrevious = prevDate.setDate(prevDate.getDate() + 6) < minSelectableDate;

        return [isDisableNext, isDisablePrevious];
    }, [maxDate, minDate, week, yearsRange]);
}
