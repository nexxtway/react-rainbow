export default function getFormattedMonth(value, locale = 'en-US') {
    try {
        return new Intl.DateTimeFormat(locale, { month: 'long' }).format(value);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
