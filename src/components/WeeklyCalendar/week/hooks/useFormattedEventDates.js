import { useMemo } from 'react';
import { getFormattedEventDates } from '../helpers';

export default function useFormattedEventDates(startDate, endDate, locale) {
    return useMemo(() => getFormattedEventDates(startDate, endDate, locale), [
        endDate,
        locale,
        startDate,
    ]);
}
