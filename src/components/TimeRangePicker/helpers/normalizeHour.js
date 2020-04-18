import isNumber from './isNumber';

export default function normalizeHour(value, hour24 = false) {
    if (isNumber(value)) {
        const number = Number(value);
        if (value === '000' && !hour24) {
            return '12';
        }
        if (number < 10) {
            return `0${number}`;
        }
        if (number > 12 && number < 20 && !hour24) {
            return `0${number - 12}`;
        }
        return String(number);
    }
    return '';
}
