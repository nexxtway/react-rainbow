import isSameMonth from './isSameMonth';
import isSameYear from './isSameYear';
import getFirstDayMonth from './getFirstDayMonth';

export default function getNextFocusedDate(value1, value2) {
    if (!value1 && !value2) return getFirstDayMonth(new Date());

    return isSameMonth(value1, value2) && isSameYear(value1, value2)
        ? value1
        : getFirstDayMonth(value2);
}
