import React from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { GlobalSearch, SearchEntity } from '@rainbow-modules/search';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px auto;
`;

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexName = process.env.REACT_APP_ALGOLIA_SEARCH_INDEX || '';
const searchIndex = searchClient.initIndex(indexName);

const universalSearchAlgolia = async ({ query, page = 1 }) => {
    const result = await searchIndex.search(query, {
        page: page - 1,
    });
    const { hits, page: searchPage, nbHits, nbPages, query: searchQuery } = result;
    return {
        hits,
        page: searchPage + 1,
        totalHits: nbHits,
        totalPages: nbPages,
        query: searchQuery,
    };
};
// TODO: universal serach es creado aqui
const UniversalSearch = () => {
    return (
        <StyledGlobalSearch
            variant="shaded"
            placeholder="Search"
            // eslint-disable-next-line no-alert
            onSelect={item => alert(JSON.stringify(item))}
        >
            <SearchEntity
                name="Books"
                onAutocomplete={universalSearchAlgolia}
                onSearch={universalSearchAlgolia}
            />
        </StyledGlobalSearch>
    );
};

export default UniversalSearch;
