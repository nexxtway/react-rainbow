import React from 'react';
import { SearchEntity, useLocalRecentSearches } from '@rainbow-modules/search';
import { Component, InteractiveExamples, YoutubeIcon } from '@rainbow-modules/icons';
import universalSearchAlgolia from './universalSearchAlgolia';
import { StyledGlobalSearch, StyledIcon } from './styled';
import PostItemSearchResult from './postItemSearchResult';
import RainbowItemSearchResult from './rainbowItemSearchResult';
import {
    componentsSearchIndex,
    examplesSearchIndex,
    youtubeSearchIndex,
    mediumsSearchIndex,
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
                onAutocomplete={universalSearchAlgolia(componentsSearchIndex)}
                onSearch={universalSearchAlgolia(componentsSearchIndex)}
                icon={<StyledIcon as={Component} />}
                component={RainbowItemSearchResult}
            />
            <SearchEntity
                name="Examples"
                onAutocomplete={universalSearchAlgolia(examplesSearchIndex)}
                onSearch={universalSearchAlgolia(examplesSearchIndex)}
                icon={<StyledIcon as={InteractiveExamples} />}
                component={RainbowItemSearchResult}
            />
            <SearchEntity
                name="Medium"
                onAutocomplete={universalSearchAlgolia(mediumsSearchIndex)}
                onSearch={universalSearchAlgolia(mediumsSearchIndex)}
                icon={<StyledIcon />}
                component={PostItemSearchResult}
            />
            <SearchEntity
                name="Youtube"
                onAutocomplete={universalSearchAlgolia(youtubeSearchIndex)}
                onSearch={universalSearchAlgolia(youtubeSearchIndex)}
                icon={<StyledIcon as={YoutubeIcon} />}
                component={PostItemSearchResult}
            />
        </StyledGlobalSearch>
    );
};

export default UniversalSearch;
