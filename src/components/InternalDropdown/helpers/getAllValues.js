export default function getAllValues(children) {
    if (!Array.isArray(children)) {
        return [];
    }
    const values = children.reduce((accumulator, child) => {
        const { icon, label, name, value, variant } = child;
        if (variant === 'default') {
            accumulator.push({
                icon,
                label,
                name,
                value,
            });
        }
        return accumulator;
    }, []);
    return values;
}
