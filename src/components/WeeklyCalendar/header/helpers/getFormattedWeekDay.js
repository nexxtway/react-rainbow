export default function getFormattedWeekDay(day, locale) {
    try {
        return new Intl.DateTimeFormat(locale, {
            weekday: 'short',
        }).format(day);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
