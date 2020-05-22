import compareDates from './compareDates';

export default function isDateWithinRange(date, range) {
    if (date && Array.isArray(range) && range.length > 1) {
        const [rangeStart, rangeEnd] = range;
        return compareDates(date, rangeStart) >= 0 && compareDates(date, rangeEnd) <= 0;
    }
    return false;
}
