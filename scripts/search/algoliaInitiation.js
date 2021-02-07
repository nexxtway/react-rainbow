require('dotenv').config();

const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_ADMIN_KEY,
);

module.exports = client;
