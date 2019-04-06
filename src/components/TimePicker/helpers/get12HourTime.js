function is12HourTimeAlready(value) {
    const values = value.split(' ');
    return values[0].length === 5 && (values[1] === 'AM' || values[1] === 'PM');
}

function get12Hour(hour) {
    const hourNumber = Number(hour);
    if (hourNumber === 0) {
        return '12';
    }
    if (hourNumber > 12 && hourNumber < 24) {
        if (hourNumber < 22) {
            return `0${String(hourNumber - 12)}`;
        }
        return String(hourNumber - 12);
    }
    return hour;
}

function getAmPmValue(hour) {
    const hourNumber = Number(hour);
    if (hourNumber > 11) {
        return 'PM';
    }
    return 'AM';
}

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
