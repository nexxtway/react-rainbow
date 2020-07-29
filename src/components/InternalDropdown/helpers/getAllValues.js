import normalizeValue from './normalizeValue';

export default function getAllValues(children) {
    if (!Array.isArray(children)) {
        return [];
    }
    const values = [];
    children.forEach(child => {
        const { label: childLabel, name, value: childValue, variant: childVariant } = child;
        if (childVariant === 'default') {
            values.push({
                label: childLabel,
                name,
                value: childValue,
            });
        }
    });
    return normalizeValue(values);
}
