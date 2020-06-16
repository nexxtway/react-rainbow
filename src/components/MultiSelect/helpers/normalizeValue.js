export default function normalizeValue(value) {
    if (!value || typeof value !== 'object') {
        return [];
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return [];
        }
        return value.map(v => {
            const newValue = v;
            delete newValue.icon;
            return newValue;
        });
    }
    const newValue = value;
    delete newValue.icon;
    return [newValue];
}
