export default function isWeekDayChecked(weekDay, value, multiple) {
    if (multiple) {
        if (Array.isArray(value)) {
            return value.some(day => day === weekDay);
        }
        return false;
    }
    return weekDay === value;
}
