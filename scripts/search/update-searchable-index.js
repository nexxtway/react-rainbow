const client = require('./algoliaClient');
const run = require('./create-searchable-content');

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
