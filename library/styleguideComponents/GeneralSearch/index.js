import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexName = process.env.REACT_APP_ALGOLIA_SEARCH_INDEX || '';

const GeneralSearch = () => {
    return (
        <InstantSearch indexName={indexName} searchClient={searchClient}>
            <Configure hitsPerPage={4} />
            <SearchInput />
            <SearchResult />
        </InstantSearch>
    );
};

export default GeneralSearch;
