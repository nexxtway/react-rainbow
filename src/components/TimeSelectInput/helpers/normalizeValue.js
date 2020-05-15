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
    if (!hour) {
        hour = '';
    }

    let minutes = getMinutes(value);
    if (!minutes || Number(minutes) > 59) {
        minutes = '';
    }

    let ampm = getAmPm(value);
    if (!ampm) {
        ampm = !hour24 ? getAmPmValue(hour) : '';
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
