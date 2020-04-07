/* eslint-disable no-console */
const FORMATS = {
    small: { year: '2-digit', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: '2-digit', day: '2-digit' },
    large: { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' },
};
const timeFormat12h = { hour12: true, hour: '2-digit', minute: '2-digit' };
const timeFormat24h = { hour12: false, hour: '2-digit', minute: '2-digit' };

export default function formatDateTime(
    date,
    formatStyle = 'medium',
    locale = 'en-US',
    hour24 = false,
) {
    if (date) {
        try {
            const options = FORMATS[formatStyle] || FORMATS.medium;
            const value = typeof date === 'string' ? new Date(date) : date;
            const timeFormat = hour24 ? timeFormat24h : timeFormat12h;
            return new Intl.DateTimeFormat(locale, { ...options, ...timeFormat }).format(value);
        } catch (error) {
            console.error(error);
            return '';
        }
    }
    return '';
}
