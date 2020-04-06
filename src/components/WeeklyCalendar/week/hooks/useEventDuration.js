import { useMemo } from 'react';
import { getDiffDate } from '../../helpers';

export default function useEventDuration(startDate, endDate) {
    return useMemo(() => getDiffDate(startDate, endDate, 'minutes'), [startDate, endDate]);
}
