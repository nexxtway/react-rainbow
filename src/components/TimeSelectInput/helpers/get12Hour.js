const get12Hour = hour => {
    if (hour === undefined || hour === null) {
        return '';
    }
    if (typeof hour === 'string' && hour.length === 0) {
        return '';
    }
    const hourNumber = Number(hour);
    if (isNaN(hourNumber) || hourNumber < 0 || hourNumber > 23) {
        return '';
    }
    if (hourNumber === 0) {
        return '12';
    }
    if (hourNumber > 12) {
        if (hourNumber < 22) {
            return `0${String(hourNumber - 12)}`;
        }
        return String(hourNumber - 12);
    }
    return hour;
};

export default get12Hour;
