import { useCallback } from 'react';

export default function useFormatedWeekDay(locale) {
    return useCallback(
        day =>
            new Intl.DateTimeFormat(locale, {
                weekday: 'short',
            }).format(day),
        [locale],
    );
}
