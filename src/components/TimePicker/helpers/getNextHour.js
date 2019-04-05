export default function getNextHour(value) {
    const number = Number(value);
    if (!value || number === 12) {
        return '1';
    }
    return String(number + 1);
}
