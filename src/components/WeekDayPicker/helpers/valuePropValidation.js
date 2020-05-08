import getWeekDays from './getWeekDays';

const weekDays = getWeekDays();

export default function valuePropValidation(propValue, key, componentName, location, propFullName) {
    if (!weekDays.some(day => day === propValue[key])) {
        return new Error(
            `Invalid prop ${propFullName} supplied to ${componentName} Validation failed.`,
        );
    }
    return null;
}
