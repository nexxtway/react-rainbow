export default function isOptionSelected(values, name) {
    if (values && Array.isArray(values)) {
        return values.some(value => value === name);
    }
    if (values && typeof values === 'string') {
        return values === name;
    }
    return false;
}
