import getHour from './getHour';
import getMinutes from './getMinutes';
import getAmPm from './getAmPm';
import normalizeHour from '../../TimePicker/helpers/normalizeHour';
import normalizeMinutes from '../../TimePicker/helpers/normalizeMinutes';

export default function normalizeValue(value, hour24) {
    const invalidValue = {
        hour: '',
        minutes: '',
        ampm: '',
    };
    if (!value) return invalidValue;

    let hour = getHour(value);
    if (!hour || Number(hour) > 23) return invalidValue;

    const minutes = getMinutes(value);
    if (!minutes || Number(minutes) > 59) return invalidValue;

    if (hour.length !== 2 || minutes.length !== 2) return invalidValue;

    let ampm = getAmPm(value);
    if (ampm) ampm.toUpperCase();
    if (ampm !== undefined && ampm !== 'AM' && ampm !== 'PM') {
        return invalidValue;
    }

    if (hour24 && ampm && Number(hour) > 12) {
        return invalidValue;
    }
    if (hour24 && ampm && ampm === 'PM' && hour < 12) {
        hour = Number(hour) + 12;
    }
    if (hour24 && ampm && ampm === 'AM' && Number(hour) === 12) {
        hour = '00';
    }
    if (!hour24 && hour === '00' && ampm) {
        return invalidValue;
    }
    if (!hour24 && Number(hour) > 12) {
        if (ampm) return invalidValue;
        hour = Number(hour) - 12;
        ampm = 'PM';
    }
    if (!hour24 && Number(hour) < 12) {
        if (!ampm) ampm = 'AM';
        if (hour === '00') hour = 12;
    }

    return {
        hour: normalizeHour(hour, hour24),
        minutes: normalizeMinutes(minutes, hour24),
        ampm,
    };
}
