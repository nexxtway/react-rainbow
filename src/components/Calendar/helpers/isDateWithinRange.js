import compareDates from './compareDates';

export default function isDateWithinRange(date, range) {
    if (!date) return false;
    const [rangeStart, rangeEnd] = range;

    return compareDates(date, rangeStart) >= 0 && compareDates(date, rangeEnd) <= 0;
}
