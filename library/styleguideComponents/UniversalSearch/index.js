import React from 'react';
import styled from 'styled-components';
import { GlobalSearch, SearchEntity } from '@rainbow-modules/search';
import { Component, Function } from '@rainbow-modules/icons';
import universalSearchAlgolia from './universalSearchAlgolia';
import YouTubeIcon from '../RibbonRenderer/youtubeIcon';
import { StyledIcon } from './styled';
import {
    searchIndexComponents,
    searchIndexExamples,
    searchIndexYoutube,
    searchIndexMediums,
} from './algoliaIndexes';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px 20px 64px auto;
    z-index: 1000;
`;

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
            />
            <SearchEntity
                name="Youtube"
                onAutocomplete={universalSearchAlgolia(searchIndexYoutube)}
                onSearch={universalSearchAlgolia(searchIndexYoutube)}
                icon={<StyledIcon as={YouTubeIcon} />}
            />
        </StyledGlobalSearch>
    );
};

export default UniversalSearch;
