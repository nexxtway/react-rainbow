import React from 'react';
import SearchEntity from '@rainbow-modules/search/lib/components/SearchEntity';
import useLocalRecentSearches from '@rainbow-modules/search/lib/hooks/useLocalRecentSearches';
import { Component, InteractiveExamples, YoutubeIcon } from '@rainbow-modules/icons';
import universalSearchAlgolia from './universalSearchAlgolia';
import PostItemSearchResult from './postItemSearchResult';
import RainbowItemSearchResult from './rainbowItemSearchResult';
import AlgoliaLogo from './algoliaLogo';
import {
    componentsSearchIndex,
    examplesSearchIndex,
    youtubeSearchIndex,
    mediumsSearchIndex,
} from './algoliaIndexes';
import { StyledGlobalSearch, StyledIcon, SearchByText } from './styled';

const navigateTo = item => {
    window.location.assign(item.url);
};

const UniversalSearch = () => {
    const [recents, addRecents] = useLocalRecentSearches('rainbow-algolia-recent-searches');
    return (
        <>
            <StyledGlobalSearch
                placeholder="Search"
                onSelect={navigateTo}
                recents={recents}
                onSearch={({ query }) => addRecents(query)}
                searchBy={
                    <div>
                        <SearchByText>Search By</SearchByText>
                        <a
                            href="https://www.algolia.com"
                            target="_blank"
                            aria-label="Algolia"
                            rel="noopener noreferrer"
                        >
                            <AlgoliaLogo />
                        </a>
                    </div>
                }
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
        </>
    );
};

export default UniversalSearch;
