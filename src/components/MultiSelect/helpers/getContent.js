export default function getContent(value) {
    if (!value || typeof value !== 'object') {
        return null;
    }
    if (Array.isArray(value)) {
        return value.map(item => item.label).join(', ');
    }
    return value.label;
}
