export default function normalizeValue(value) {
    if (!value || typeof value !== 'object') {
        return [];
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return [];
        }
        return value.map(item => {
            const { icon, label, name, value: itemValue } = item;
            return {
                icon,
                label,
                name,
                value: itemValue,
            };
        });
    }
    const { icon, label, name, value: itemValue } = value;
    return {
        icon,
        label,
        name,
        value: itemValue,
    };
}
