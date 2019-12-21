export default function getPrevHour(value, hour24 = false) {
    const number = Number(value);
    if ((!value || number === 1 || number === 0) && !hour24) {
        return '12';
    }

    if ((!value || number === 0) && hour24) {
        return '23';
    }
    return String(number - 1);
}
