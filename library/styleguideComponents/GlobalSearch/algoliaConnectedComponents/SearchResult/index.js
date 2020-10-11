import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import ResultItems from './ResultItems';
import ResultItem from './ResultItem';

const RenderIfQuery = connectStateResults(({ searchState, children }) => {
    return searchState && searchState.query ? children : '';
});

const SearchResult = () => {
    return (
        <RenderIfQuery>
            <ResultItems component={ResultItem} />
        </RenderIfQuery>
    );
};

export default SearchResult;
