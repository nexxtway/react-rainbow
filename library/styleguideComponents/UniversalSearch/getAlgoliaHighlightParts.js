const getAlgoliaHighlightParts = ({ value, matchedWords }) => {
    return value.split(/<em>(.*?)<\/em>/g).map(item => {
        if (matchedWords.includes(item.toLowerCase())) {
            return {
                value: item,
                type: 'hit',
            };
        }
        return {
            value: item,
            type: 'text',
        };
    });
};

export default getAlgoliaHighlightParts;
