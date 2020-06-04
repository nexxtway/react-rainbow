export default function getValueNames(value) {
    if (Array.isArray(value)) {
        return value.reduce((seed, item) => {
            if (item.name) {
                seed.push(item.name);
            }
            return seed;
        }, []);
    }
    if (value && value.name) {
        return [value.name];
    }
    return [];
}
