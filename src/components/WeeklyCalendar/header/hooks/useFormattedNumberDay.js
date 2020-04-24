import { useCallback } from 'react';

export default function useFormattedNumberDay(locale) {
    return useCallback(
        day =>
            new Intl.DateTimeFormat(locale, {
                day: 'numeric',
            }).format(day),
        [locale],
    );
}
