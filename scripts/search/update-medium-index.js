require('dotenv').config();
const fetch = require('node-fetch');
const client = require('./algoliaInitiation');

const mediumsIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_SEARCH_MEDIUMS_INDEX);

const mediumApiUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/react-rainbow';

// eslint-disable-next-line consistent-return
const getMediumPosts = async () => {
    try {
        const resp = await fetch(mediumApiUrl);
        const { items } = await resp.json();
        const posts = items.map(item => {
            const { title, pubDate, link, guid, author, thumbnail } = item;
            const finalId = guid.split('/');
            const objectID = finalId[finalId.length - 1];
            return {
                text: title,
                pubDate,
                url: link,
                objectID,
                author,
                image: thumbnail,
                description: '',
                type: 'medium',
            };
        });
        return posts;
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    try {
        const posts = await getMediumPosts();
        await mediumsIndex.saveObjects(posts);
        console.log('Done!');
    } catch (error) {
        console.error(error);
    }
})();
