export default function getPrevMinute(value) {
    const number = Number(value);
    if (!value || number === 0) {
        return '59';
    }
    return String(number - 1);
}
