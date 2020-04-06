const getYearsDiff = (date1, date2) => date2.getFullYear() - date1.getFullYear();
const getMonthsDiff = (date1, date2) =>
    getYearsDiff(date1, date2) * 12 + date2.getMonth() - date1.getMonth();

export default function getDiffDate(date1, date2, unit) {
    const diff = date2 - date1;
    const units = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000,
        weeks: 604800000,
    };
    if (units[unit]) {
        return diff / units[unit];
    }
    if (unit === 'months') {
        return getMonthsDiff(date1, date2);
    }
    if (unit === 'years') {
        return getYearsDiff(date1, date2);
    }
    return diff;
}
