export default function isNumeric(value) {
    if (value) {
        // eslint-disable-next-line no-restricted-globals
        return !isNaN(value);
    }
    return false;
}
