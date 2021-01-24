import React from 'react';
import { SearchEntity, useLocalRecentSearches } from '@rainbow-modules/search';
import { Component, InteractiveExamples, YoutubeIcon } from '@rainbow-modules/icons';
import universalSearchAlgolia from './universalSearchAlgolia';
import { StyledGlobalSearch, StyledIcon } from './styled';
import PostItemSearchResult from './PostItemSearchResult';
import RainbowItemSearchResult from './RainbowItemSearchResult';
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
    const [recents, addRecents] = useLocalRecentSearches('rainbow-algolia-recent-searches');
    return (
        <StyledGlobalSearch
            placeholder="Search"
            onSelect={navigateTo}
            recents={recents}
            onSearch={({ query }) => addRecents(query)}
        >
            <SearchEntity
                name="Components"
                onAutocomplete={universalSearchAlgolia(searchIndexComponents)}
                onSearch={universalSearchAlgolia(searchIndexComponents)}
                icon={<StyledIcon as={Component} />}
                component={RainbowItemSearchResult}
            />
            <SearchEntity
                name="Examples"
                onAutocomplete={universalSearchAlgolia(searchIndexExamples)}
                onSearch={universalSearchAlgolia(searchIndexExamples)}
                icon={<StyledIcon as={InteractiveExamples} />}
                component={RainbowItemSearchResult}
            />
            <SearchEntity
                name="Medium"
                onAutocomplete={universalSearchAlgolia(searchIndexMediums)}
                onSearch={universalSearchAlgolia(searchIndexMediums)}
                icon={<StyledIcon />}
                component={PostItemSearchResult}
            />
            <SearchEntity
                name="Youtube"
                onAutocomplete={universalSearchAlgolia(searchIndexYoutube)}
                onSearch={universalSearchAlgolia(searchIndexYoutube)}
                icon={<StyledIcon as={YoutubeIcon} />}
                component={PostItemSearchResult}
            />
        </StyledGlobalSearch>
    );
};

export default UniversalSearch;
