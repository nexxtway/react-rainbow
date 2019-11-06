import compareDates from './compareDates';

export default function isDateBelowLimit(date, limit) {
    return compareDates(date, limit) < 0;
}
