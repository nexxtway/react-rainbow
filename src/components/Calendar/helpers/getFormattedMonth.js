export default function getFormattedMonth(value) {
    try {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
