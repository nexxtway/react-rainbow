import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexComponents = process.env.REACT_APP_ALGOLIA_SEARCH_COMPONENTS_INDEX || '';
const indexExamples = process.env.REACT_APP_ALGOLIA_SEARCH_EXAMPLES_INDEX || '';
const indexYoutube = process.env.REACT_APP_ALGOLIA_SEARCH_YOUTUBE_INDEX || '';
const indexMediums = process.env.REACT_APP_ALGOLIA_SEARCH_MEDIUMS_INDEX || '';

export const componentsSearchIndex = searchClient.initIndex(indexComponents);
export const examplesSearchIndex = searchClient.initIndex(indexExamples);
export const youtubeSearchIndex = searchClient.initIndex(indexYoutube);
export const mediumsSearchIndex = searchClient.initIndex(indexMediums);
