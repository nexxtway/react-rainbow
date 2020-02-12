/* eslint-disable no-console */
import isValidDate from './isValidDate';
import zeroFill from './zeroFill';

export default function extractTime(date, hour24 = false) {
    if (date) {
        const value = typeof date === 'string' ? new Date(date) : date;
        if (!isValidDate(value)) {
            return '';
        }

        if (!hour24) {
            const hours = ((value.getHours() + 11) % 12) + 1;
            const suffix = value.getHours() >= 12 ? 'PM' : 'AM';
            const minutes = value.getMinutes();
            return `${zeroFill(hours, 2)}:${zeroFill(minutes, 2)} ${suffix}`;
        }

        const hours = value.getHours();
        const minutes = value.getMinutes();
        return `${zeroFill(hours, 2)}:${zeroFill(minutes, 2)}`;
    }

    return '';
}
