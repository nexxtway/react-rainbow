import { useMemo } from 'react';
import { getFormattedEventTimeRange } from '../helpers';

export default function useFormattedEventTimeRange(startDate, endDate, locale) {
    return useMemo(() => getFormattedEventTimeRange(startDate, endDate, locale), [
        endDate,
        locale,
        startDate,
    ]);
}
