import { useMemo } from 'react';
import getCurrentMonth from '../helpers/getCurrentMonth';

export default function useCurrentMonth(currentMonth, minDate, maxDate) {
    return useMemo(() => getCurrentMonth(currentMonth, minDate, maxDate), [
        currentMonth,
        minDate,
        maxDate,
    ]);
}
