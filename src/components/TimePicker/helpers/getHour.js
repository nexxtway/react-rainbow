export default function getHour(value) {
    if (value) {
        return value.split(':')[0];
    }
    return '';
}
