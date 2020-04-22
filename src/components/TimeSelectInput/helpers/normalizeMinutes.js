import isNumber from './isNumber';

export default function normalizeMinutes(value) {
    if (isNumber(value)) {
        const number = Number(value);
        if (number < 10) {
            return `0${number}`;
        }
        return String(number);
    }
    return '';
}
