import normalizeValue from './normalizeValue';

export default function getAllValues(children) {
    if (!Array.isArray(children)) {
        return [];
    }
    const values = children.reduce((accumulator, child) => {
        const { label: childLabel, name, value: childValue, variant: childVariant } = child;
        if (childVariant === 'default') {
            accumulator.push({
                label: childLabel,
                name,
                value: childValue,
            });
        }
        return accumulator;
    }, []);
    return normalizeValue(values);
}
