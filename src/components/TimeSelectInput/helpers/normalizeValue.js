import {
    get12Hour,
    get24Hour,
    getAmPmValue,
    getHour,
    getMinutes,
    normalizeHour,
    normalizeMinutes,
    getAmPm,
} from '.';

export default function normalizeValue(value, hour24) {
    const invalidValue = {
        hour: '',
        minutes: '',
        ampm: '',
    };

    if (!value) return invalidValue;

    let hour = getHour(value);
    if (!hour || +hour > 23) {
        return invalidValue;
    }

    const minutes = getMinutes(value);
    if (!minutes || +minutes > 59) {
        return invalidValue;
    }

    let ampm = getAmPm(value);
    if (!ampm) {
        ampm = !hour24 ? getAmPmValue(hour) : '';
    }

    if (ampm && ampm.toUpperCase() !== 'AM' && ampm.toUpperCase() !== 'PM') {
        return invalidValue;
    }

    if (hour) {
        hour = hour24 ? get24Hour(hour, ampm) : get12Hour(hour);
    }

    return {
        hour: normalizeHour(hour, hour24),
        minutes: normalizeMinutes(minutes, hour24),
        ampm,
    };
}
