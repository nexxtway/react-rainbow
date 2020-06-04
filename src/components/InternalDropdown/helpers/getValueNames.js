export default function getValueNames(value) {
    if (Array.isArray(value)) {
        const names = value.map(v => v.name);
        return names.filter(v => !!v);
    }
    if (value && value.name) {
        return [value.name];
    }
    return [];
}
