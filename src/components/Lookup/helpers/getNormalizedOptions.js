export default function getNormalizedOptions(options) {
    const { isArray } = Array;
    if (isArray(options)) {
        return options.reduce((arr, item) => {
            if (item.type === 'section') {
                arr.push({
                    label: item.label,
                    type: 'header',
                });
                return arr.concat(isArray(item.options) ? item.options : []);
            }
            arr.push(item);
            return arr;
        }, []);
    }
    return [];
}
