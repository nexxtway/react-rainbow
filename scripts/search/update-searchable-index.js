require('dotenv').config();
const algoliasearch = require('algoliasearch');
const run = require('./create-searchable-content');

const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_ADMIN_KEY,
);
const componentsIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_SEARCH_COMPONENTS_INDEX);
const examplesIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_SEARCH_EXAMPLES_INDEX);

const sercheableContent = run();
const components = sercheableContent.filter(item => item.type === 'component');
const examples = sercheableContent.filter(item => item.type === 'example');

componentsIndex.saveObjects(components).then(({ objectIDs }) => {
    console.log('Components: ', objectIDs);
});

examplesIndex.saveObjects(examples).then(({ objectIDs }) => {
    console.log('Examples: ', objectIDs);
});
