export default function getFormattedDay(day, locale) {
    try {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
        }).format(day);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
