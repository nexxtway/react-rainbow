const get24Hour = (hour, ampm) => {
    if (!hour) return '';
    const hourNumber = Number(hour);
    if (isNaN(hourNumber) || hourNumber < 0 || hourNumber > 23) {
        return '';
    }
    if (!ampm) {
        return hour;
    }
    if (ampm.toUpperCase() === 'AM') {
        if (hourNumber === 12) {
            return '00';
        }
        return hour;
    }
    if (ampm.toUpperCase() === 'PM' && hourNumber < 13) {
        if (hourNumber === 12) {
            return '12';
        }
        return String(hourNumber + 12);
    }
    return hour;
};

export default get24Hour;
