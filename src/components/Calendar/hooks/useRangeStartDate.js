import { useMemo } from 'react';
import { isSameDay, isEmptyRange } from '../helpers';

export default function useRangeStartDate(date, currentRange) {
    return useMemo(() => (isEmptyRange(currentRange) ? false : isSameDay(date, currentRange[0])), [
        date,
        currentRange,
    ]);
}
