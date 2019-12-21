export default function getNextHour(value, hour24 = false) {
    const number = Number(value);
    if ((!value || number === 12) && !hour24) {
        return '1';
    }

    if ((!value || number === 23) && hour24) {
        return '0';
    }
    return String(number + 1);
}
