import getAlgoliaHighlightParts from './getAlgoliaHighlightParts';

const universalSearchAlgolia = indexName => {
    const searchAlgolia = async ({ query, page = 1 }) => {
        const result = await indexName.search(query, {
            page: page - 1,
        });
        const { hits, page: searchPage, nbHits, nbPages, query: searchQuery } = result;
        return {
            hits: hits.map(item => ({
                // eslint-disable-next-line dot-notation
                title: getAlgoliaHighlightParts(item['_highlightResult'].text),
                // eslint-disable-next-line dot-notation
                description: getAlgoliaHighlightParts(item['_highlightResult'].description),
                url: item.url,
                image: item.image,
                date: item.pubDate,
                author: item.author,
            })),
            page: searchPage + 1,
            totalHits: nbHits,
            totalPages: nbPages,
            query: searchQuery,
        };
    };
    return searchAlgolia;
};

export default universalSearchAlgolia;
