export default function isNumeric(value) {
    if (value) {
        return !isNaN(value);
    }
    return false;
}
