export default function getFormattedClock(clock, locale) {
    try {
        return new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(clock);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
