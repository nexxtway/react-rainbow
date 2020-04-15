import { useMemo } from 'react';

export default function useFormattedEventDates(startDate, endDate, locale) {
    return useMemo(() => {
        return `${new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(startDate)} - ${new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(endDate)}`;
    }, [endDate, locale, startDate]);
}
