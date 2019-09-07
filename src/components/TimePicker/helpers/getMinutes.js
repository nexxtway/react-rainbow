export default function getMinutes(value) {
    if (value) {
        return value.split(':')[1].split(' ')[0];
    }
    return '';
}
