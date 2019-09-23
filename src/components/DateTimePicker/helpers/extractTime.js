/* eslint-disable no-console */

export default function extractTime(date) {
    if (date) {
        try {
            const options = {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
            const value = typeof date === 'string' ? new Date(date) : date;
            return new Intl.DateTimeFormat('en-US', options).format(value);
        } catch (error) {
            console.error(error);
            return '';
        }
    }
    console.error('Invalid date value passed to DatePicker');
    return '';
}
