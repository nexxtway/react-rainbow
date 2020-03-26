export default function isOptionSelected(values, name) {
    if (values && Array.isArray(values)) {
        return values.some(v => v === name);
    } else if (values && typeof values === 'string') {
        return values === name;
    }
    return false;
}
