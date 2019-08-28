export default function normalizeValue(value) {
    if (value && typeof value === 'object') {
        return value;
    }
    return {};
}
