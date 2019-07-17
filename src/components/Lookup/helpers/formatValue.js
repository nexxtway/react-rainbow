export default function formatValue(value) {
    try {
        const { label, icon } = value;
        if (label === undefined) {
            throw new Error('Invalid value');
        }

        return { label, icon };
    } catch (error) {
        if (typeof value === 'string') {
            return { icon: undefined, label: value };
        }

        return { label: undefined, icon: undefined };
    }
}
