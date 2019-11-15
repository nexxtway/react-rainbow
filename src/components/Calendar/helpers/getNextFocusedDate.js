import isSameMonth from './isSameMonth';
import isSameYear from './isSameYear';
import getFirstDayMonth from './getFirstDayMonth';

export default function getNextFocusedDate(currentDate, nextDate) {
    if (!currentDate && !nextDate) return getFirstDayMonth(new Date());

    return isSameMonth(currentDate, nextDate) && isSameYear(currentDate, nextDate)
        ? currentDate
        : getFirstDayMonth(nextDate);
}
