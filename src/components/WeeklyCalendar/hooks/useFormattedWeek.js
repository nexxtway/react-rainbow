import { useMemo } from 'react';
import { getFormattedWeek } from '../helpers';

export default function useFormattedWeek(week, locale) {
    return useMemo(() => getFormattedWeek(week, locale), [locale, week]);
}
