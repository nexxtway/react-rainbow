require('dotenv').config();
const fetch = require('node-fetch');
const client = require('./algoliaInitiation');

const youtubeIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_SEARCH_YOUTUBE_INDEX);
const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?key=${
    process.env.REACT_YOUTUBE_API_KEY
}&channelId=UCvJHgfOlJc8-aEkZbQV9O3w&part=snippet,id&order=date&maxResults=50`;

// eslint-disable-next-line consistent-return
const getYoutubeVideos = async () => {
    try {
        const resp = await fetch(youtubeApiUrl);
        const { items } = await resp.json();
        const videosFiltered = items.filter(item => item.id.kind === 'youtube#video');

        return videosFiltered.map(item => {
            const objectID = item.id.videoId;
            const { title, publishTime, description } = item.snippet;
            const thumbnail = item.snippet.thumbnails.default.url;
            const url = `https://www.youtube.com/watch?v=${objectID}`;
            return {
                text: title,
                pubDate: publishTime,
                url,
                objectID,
                author: 'React Rainbow',
                image: thumbnail,
                description,
                type: 'youtube',
            };
        });
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    try {
        const videos = await getYoutubeVideos();
        await youtubeIndex.saveObjects(videos);
        console.log('Done!');
    } catch (error) {
        console.error(error);
    }
})();
