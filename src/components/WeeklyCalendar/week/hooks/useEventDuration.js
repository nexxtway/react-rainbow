import { useMemo } from 'react';
import { getDiffMinutes } from '../helpers';

export default function useEventDuration(startDate, endDate) {
    return useMemo(() => getDiffMinutes(startDate, endDate), [endDate, startDate]);
}
