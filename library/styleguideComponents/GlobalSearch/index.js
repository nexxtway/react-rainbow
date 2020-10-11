import React, { useState, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import SearchInput from './algoliaConnectedComponents/SearchInput';
import SearchResult from './algoliaConnectedComponents/SearchResult';
import InternalOverlay from '../../../src/components/InternalOverlay';
import { Dropdown, StyledAlgoliaLogo } from './styled';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexName = process.env.REACT_APP_ALGOLIA_SEARCH_INDEX || '';

const GlobalSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);
    const dropdownRef = useRef();

    return (
        <InstantSearch indexName={indexName} searchClient={searchClient}>
            <Configure hitsPerPage={6} />
            <SearchInput
                className="rainbow-m-right_large"
                ref={triggerRef}
                onClick={() => setIsOpen(!isOpen)}
            />
            <InternalOverlay
                isVisible={isOpen}
                render={() => (
                    <Dropdown ref={dropdownRef}>
                        <SearchResult />
                        <StyledAlgoliaLogo />
                    </Dropdown>
                )}
                triggerElementRef={() => triggerRef.current}
            />
        </InstantSearch>
    );
};

export default GlobalSearch;
