import get12Hour from './get12Hour';
import getAmPmValue from './getAmPmValue';

const is12HourTimeAlready = value => {
    const values = value.split(' ');
    return values[0].length === 5 && (values[1] === 'AM' || values[1] === 'PM');
};

export default function get12HourTime(value) {
    if (value && typeof value === 'string') {
        if (is12HourTimeAlready(value)) {
            return value;
        }
        const values = value.split(':');
        const hour = values[0];
        const minutes = values[1];
        const hasValuesRightLength = hour.length === 2 && minutes.length === 2;

        if (hasValuesRightLength) {
            const hour12 = get12Hour(hour);
            const ampm = getAmPmValue(hour);

            return `${hour12}:${minutes} ${ampm}`;
        }
        return undefined;
    }
    return undefined;
}
