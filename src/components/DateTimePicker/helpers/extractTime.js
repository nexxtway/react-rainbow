/* eslint-disable no-console */
import isValidDate from './isValidDate';
import zeroFill from './zeroFill';

export default function extractTime(date) {
    if (date) {
        const value = typeof date === 'string' ? new Date(date) : date;
        if (!isValidDate(value)) {
            return '';
        }
        const hours = ((value.getHours() + 11) % 12) + 1;
        const suffix = value.getHours() >= 12 ? 'PM' : 'AM';
        const minutes = value.getMinutes();
        return `${zeroFill(hours, 2)}:${zeroFill(minutes, 2)} ${suffix}`;
    }
    console.error('Invalid date value passed to DateTimePicker');
    return '';
}
