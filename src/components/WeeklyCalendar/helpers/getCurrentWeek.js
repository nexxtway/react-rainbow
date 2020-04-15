import getFirstDayOfWeek from './getFirstDayOfWeek';
import { normalizeDate, isDateBelowLimit, isDateBeyondLimit } from '../../Calendar/helpers';

export default function getCurrentWeek(currentWeek, minDate, maxDate) {
    const week = getFirstDayOfWeek(normalizeDate(currentWeek));
    week.setHours(0, 0, 0, 0);

    if (minDate) {
        const minWeek = getFirstDayOfWeek(normalizeDate(minDate));
        minWeek.setHours(0, 0, 0, 0);
        if (isDateBelowLimit(week, minWeek)) return minWeek;
    }

    if (maxDate) {
        const maxWeek = getFirstDayOfWeek(normalizeDate(maxDate));
        maxWeek.setHours(0, 0, 0, 0);
        if (isDateBeyondLimit(week, maxWeek)) return maxWeek;
    }

    return week;
}
