const get24Hour = (hour, ampm) => {
    if (!hour) return '';
    const hourNumber = Number(hour);
    if (ampm === 'AM') {
        if (hourNumber === 12) {
            return '00';
        }
        return hour;
    }
    if (ampm === 'PM') {
        if (hourNumber === 12) {
            return '12';
        }
        return String(hourNumber + 12);
    }
    return hour;
};

export default get24Hour;
