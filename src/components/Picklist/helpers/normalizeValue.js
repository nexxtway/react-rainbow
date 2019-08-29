export default function normalizeValue(value) {
    if (value && ['object', 'string'].includes(typeof value)) {
        return value;
    }
    return {};
}
