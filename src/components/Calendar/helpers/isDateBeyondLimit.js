import compareDates from './compareDates';

export default function isDateBeyondLimit(date, limit) {
    return compareDates(date, limit) > 0;
}
