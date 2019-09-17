export default function normalizeValue(value) {
    if (value < 0) {
        return 0;
    } else if (value > 100) {
        return 100;
    }
    return value;
}
