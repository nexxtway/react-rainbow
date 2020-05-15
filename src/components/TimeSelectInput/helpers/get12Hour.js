const get12Hour = hour => {
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
};

export default get12Hour;
