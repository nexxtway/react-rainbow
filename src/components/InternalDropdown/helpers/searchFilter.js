function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getWords(query) {
    return query
        .split(/\s+/g)
        .map(word => word.trim())
        .filter(word => !!word);
}

export default function filterCollection(params) {
    const { query, data, mapValuesToStringFn = item => item.label } = params;
    if (query) {
        return data.filter(item => {
            const stringToMatch = mapValuesToStringFn(item);

            const words = getWords(query);
            return words.every(word => {
                const regex = new RegExp(escapeRegExp(word), 'i');
                return regex.test(stringToMatch);
            });
        });
    }
    return data;
}
