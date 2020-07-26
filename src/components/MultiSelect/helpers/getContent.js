export default function getContent(value) {
    if (Array.isArray(value)) {
        return value.map(item => item.label).join(', ');
    }
    if (value && typeof value === 'object') {
        return value.label;
    }
    return null;
}
