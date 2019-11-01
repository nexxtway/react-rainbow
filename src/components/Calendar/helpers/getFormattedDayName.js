export default function getFormattedDayName(date, format = 'short', locale = 'en-US') {
    try {
        return new Intl.DateTimeFormat(locale, { weekday: format }).format(date);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return '';
    }
}
