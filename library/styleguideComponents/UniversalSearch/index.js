import React from 'react';
import { SearchEntity } from '@rainbow-modules/search';
import { Component, Function } from '@rainbow-modules/icons';
import universalSearchAlgolia from './universalSearchAlgolia';
import YouTubeIcon from '../RibbonRenderer/youtubeIcon';
import { StyledGlobalSearch, StyledIcon } from './styled';
import ItemSearchResult from './ItemSearchResult';
import {
    searchIndexComponents,
    searchIndexExamples,
    searchIndexYoutube,
    searchIndexMediums,
} from './algoliaIndexes';

const navigateTo = item => {
    window.location.assign(item.url);
};

const UniversalSearch = () => {
    return (
        <StyledGlobalSearch
            placeholder="Search"
            // eslint-disable-next-line no-alert
            onSelect={navigateTo}
        >
            <SearchEntity
                name="Components"
                onAutocomplete={universalSearchAlgolia(searchIndexComponents)}
                onSearch={universalSearchAlgolia(searchIndexComponents)}
                icon={<Component />}
            />
            <SearchEntity
                name="Examples"
                onAutocomplete={universalSearchAlgolia(searchIndexExamples)}
                onSearch={universalSearchAlgolia(searchIndexExamples)}
                icon={<Function />}
            />
            <SearchEntity
                name="Medium"
                onAutocomplete={universalSearchAlgolia(searchIndexMediums)}
                onSearch={universalSearchAlgolia(searchIndexMediums)}
                icon={<StyledIcon />}
                component={ItemSearchResult}
            />
            <SearchEntity
                name="Youtube"
                onAutocomplete={universalSearchAlgolia(searchIndexYoutube)}
                onSearch={universalSearchAlgolia(searchIndexYoutube)}
                icon={<StyledIcon as={YouTubeIcon} />}
                component={ItemSearchResult}
            />
        </StyledGlobalSearch>
    );
};

export default UniversalSearch;
