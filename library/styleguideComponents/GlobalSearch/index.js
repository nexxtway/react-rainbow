import React, { useState, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import SearchInput from './algoliaConnectedComponents/SearchInput';
import SearchResult from './algoliaConnectedComponents/SearchResult';
import { Container } from './styled';
import { useOutsideClick } from '../../../src/libs/hooks';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

const indexName = process.env.REACT_APP_ALGOLIA_SEARCH_INDEX || '';

const GlobalSearch = () => {
    const ref = useRef();
    const containerRef = useRef();
    const [isOpen, setOpen] = useState(false);
    const handleChange = event => {
        if (event.target.value) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };
    useOutsideClick(
        containerRef,
        () => {
            ref.current.clear();
        },
        isOpen,
    );
    return (
        <InstantSearch indexName={indexName} searchClient={searchClient}>
            <Configure hitsPerPage={6} />
            <Container ref={containerRef}>
                <SearchInput
                    className="rainbow-m-right_large"
                    customRef={ref}
                    onChange={handleChange}
                />
                <SearchResult />
            </Container>
        </InstantSearch>
    );
};

export default GlobalSearch;
