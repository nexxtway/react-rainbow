function get24Hour(hour, ampm) {
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
}

export default function get24HourTime({ hour, minutes, ampm }) {
    const hour24 = get24Hour(hour, ampm);
    return `${hour24}:${minutes}`;
}
