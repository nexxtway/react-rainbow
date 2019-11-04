/* eslint-disable no-console */
export default function extractDate(date) {
    if (date) {
        try {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const value = typeof date === 'string' ? new Date(date) : date;
            return new Intl.DateTimeFormat('en-US', options).format(value);
        } catch (error) {
            console.error(error);
            return '';
        }
    }
    return '';
}
