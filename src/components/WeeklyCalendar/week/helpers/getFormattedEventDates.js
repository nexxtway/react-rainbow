export default function getFormattedEventDates(startDate, endDate, locale) {
    try {
        return `${new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(startDate)} - ${new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(endDate)}`;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
