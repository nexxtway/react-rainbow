import { useMemo } from 'react';
import { isSameDay, isEmptyRange } from '../helpers';

export default function useRangeEndDate(date, currentRange) {
    return useMemo(
        () =>
            !isEmptyRange(currentRange) && currentRange.length >= 2
                ? isSameDay(date, currentRange[1])
                : false,
        [date, currentRange],
    );
}
