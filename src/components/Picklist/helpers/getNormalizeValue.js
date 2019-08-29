export default function getNormalizeValue(value) {
    if (value && ['object', 'string'].includes(typeof value) && !Array.isArray(value)) {
        return value;
    }
    return {};
}
