export default function isOptionSelected(values, option) {
    if (values && Array.isArray(values)) {
        return values.some(value => value === option.value);
    }
    return false;
}
