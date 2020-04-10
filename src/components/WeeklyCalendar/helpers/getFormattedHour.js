export default function getFormattedHour(hour, locale) {
    try {
        return new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            hour12: true,
        }).format(hour);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
