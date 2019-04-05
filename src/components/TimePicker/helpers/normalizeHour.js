import isNumber from './isNumber';

export default function normalizeHour(value) {
    if (isNumber(value)) {
        const number = Number(value);
        if (value === '000') {
            return '12';
        }
        if (number < 10) {
            return `0${number}`;
        }
        if (number > 12 && number < 20) {
            return `0${number - 12}`;
        }
        return String(number);
    }
    return '';
}
