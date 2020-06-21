export default function normalizeValue(value) {
    if (!value || typeof value !== 'object') {
        return [];
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return [];
        }
        return value.map(item => {
            const { label, name, value: itemValue } = item;
            return {
                label,
                name,
                value: itemValue,
            };
        });
    }
    const { label, name, value: itemValue } = value;
    return [
        {
            label,
            name,
            value: itemValue,
        },
    ];
}
