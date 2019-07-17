export default function formatValue(value) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return value;
    }
    return {};
}
