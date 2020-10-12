import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import ResultItems from './ResultItems';
import ResultItem from './ResultItem';
import { Dropdown, StyledAlgoliaLogo } from '../../styled';

const RenderIfQuery = connectStateResults(({ searchState, children }) => {
    return searchState && searchState.query ? children : null;
});

const SearchResult = () => {
    return (
        <RenderIfQuery>
            <Dropdown>
                <ResultItems component={ResultItem} />
                <StyledAlgoliaLogo />
            </Dropdown>
        </RenderIfQuery>
    );
};

export default SearchResult;
