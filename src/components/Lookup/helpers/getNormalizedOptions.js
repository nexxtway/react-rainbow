export default function getNormalizedOptions(options) {
    if (options && Array.isArray(options)) {
        const arr = [];
        options.forEach(item => {
            if (item.type === 'section') {
                arr.push({
                    label: item.label,
                    type: 'header',
                });
                item.options.forEach(option => {
                    arr.push(option);
                });
            } else {
                arr.push(item);
            }
        });
        return arr;
    }
    return [];
}
