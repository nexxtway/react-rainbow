import sortWeekDays from '../helpers/sortWeekDays';

export default function getNormalizedValue(weekDay, isChecked, multiple, value) {
    if (multiple && value) {
        if (isChecked && !value.includes(weekDay)) {
            return sortWeekDays([...value, weekDay]);
        }

        return sortWeekDays(value.filter(day => day !== weekDay));
    }

    return weekDay;
}
