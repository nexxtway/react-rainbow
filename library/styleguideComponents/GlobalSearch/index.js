import React, { useState, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import SearchInput from './algoliaConnectedComponents/SearchInput';
import SearchResult from './algoliaConnectedComponents/SearchResult';
import { Dropdown, StyledAlgoliaLogo, Container } from './styled';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexName = process.env.REACT_APP_ALGOLIA_SEARCH_INDEX || '';

const GlobalSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <InstantSearch indexName={indexName} searchClient={searchClient}>
            <Configure hitsPerPage={6} />
            <Container>
                <SearchInput
                    className="rainbow-m-right_large"
                    ref={triggerRef}
                    onClick={handleClick}
                />
                <SearchResult />
            </Container>
        </InstantSearch>
    );
};

export default GlobalSearch;
