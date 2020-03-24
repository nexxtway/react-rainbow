export default function isOptionSelected(values, name) {
    if (values && Array.isArray(values)) {
        return values.some(v => v === name);
    }
    return false;
}
