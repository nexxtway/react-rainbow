export default function getAmPm(value) {
    if (value) {
        return value.split(' ')[1];
    }
    return undefined;
}
