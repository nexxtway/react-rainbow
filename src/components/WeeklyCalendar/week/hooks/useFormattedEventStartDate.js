import { useMemo } from 'react';
import { getFormattedEventStartDate } from '../helpers';

export default function useFormattedEventStartDate(startDate, locale) {
    return useMemo(() => getFormattedEventStartDate(startDate, locale), [locale, startDate]);
}
