import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexComponents = process.env.REACT_APP_ALGOLIA_SEARCH_COMPONENTS_INDEX || '';
const indexExamples = process.env.REACT_APP_ALGOLIA_SEARCH_EXAMPLES_INDEX || '';
const indexYoutube = process.env.REACT_APP_ALGOLIA_SEARCH_YOUTUBE_INDEX || '';
const indexMediums = process.env.REACT_APP_ALGOLIA_SEARCH_MEDIUMS_INDEX || '';

export const searchIndexComponents = searchClient.initIndex(indexComponents);
export const searchIndexExamples = searchClient.initIndex(indexExamples);
export const searchIndexYoutube = searchClient.initIndex(indexYoutube);
export const searchIndexMediums = searchClient.initIndex(indexMediums);
