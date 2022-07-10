import isSameDay from './isSameDay';

export default function isInArray(value, array) {
    if (!array) return false;
    return array.some(day => isSameDay(day, value));
}
