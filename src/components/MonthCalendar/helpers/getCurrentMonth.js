import {
    normalizeDate,
    getFirstDayMonth,
    isDateBelowLimit,
    isDateBeyondLimit,
} from '../../Calendar/helpers';

export default function getCurrentMonth(currentMonth, minDate, maxDate) {
    const month = getFirstDayMonth(normalizeDate(currentMonth));
    month.setHours(0, 0, 0, 0);

    if (minDate) {
        const minMonth = getFirstDayMonth(normalizeDate(minDate));
        minMonth.setHours(0, 0, 0, 0);
        if (isDateBelowLimit(month, minMonth)) return minMonth;
    }

    if (maxDate) {
        const maxMonth = getFirstDayMonth(normalizeDate(maxDate));
        maxMonth.setHours(0, 0, 0, 0);
        if (isDateBeyondLimit(month, maxMonth)) return maxMonth;
    }

    return month;
}
