import { useMemo } from 'react';
import { getLastDayMonth, addMonths } from '../../helpers';

export default function useLastDayMonth(currentMonth) {
    return useMemo(() => getLastDayMonth(addMonths(currentMonth, -1)), [currentMonth]);
}
