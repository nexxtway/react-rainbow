/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import GitHubButton from 'react-github-btn';
import StackoverflowIcon from './stackoverflowIcon';
import YouTubeIcon from './youtubeIcon';
import GlobalSearch from '../GlobalSearch';
import MediumIcon from './mediumIcon';
import {
    StyledContainer,
    StyledGitHubContianer,
    StyledIcon,
    StyledLink,
    StyledHeading,
    StyledTwitterIcon,
    StyledGithubIcon,
} from './styled';

export default function RibbonRenderer() {
    return (
        <StyledHeading>
            <GlobalSearch />
            <StyledContainer>
                <StyledGitHubContianer>
                    <GitHubButton
                        href="https://github.com/nexxtway/react-rainbow"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star nexxtway/react-rainbow on GitHub"
                    >
                        Star
                    </GitHubButton>
                </StyledGitHubContianer>
                <StyledLink
                    href="https://github.com/nexxtway/react-rainbow"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github repository"
                >
                    <StyledGithubIcon />
                </StyledLink>
                <StyledLink
                    href="https://stackoverflow.com/questions/tagged/react-rainbow+or+react-rainbow-components+or+rainbow-components"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Stackoverflow"
                >
                    <StyledIcon as={StackoverflowIcon} />
                </StyledLink>
                <StyledLink
                    href="https://medium.com/react-rainbow"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Medium Blog"
                >
                    <StyledIcon as={MediumIcon} />
                </StyledLink>
                <StyledLink
                    href="https://twitter.com/ReactRainbow"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                >
                    <StyledIcon as={StyledTwitterIcon} />
                </StyledLink>
                <StyledLink
                    href="https://www.youtube.com/channel/UCvJHgfOlJc8-aEkZbQV9O3w"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube Channel"
                >
                    <StyledIcon as={YouTubeIcon} />
                </StyledLink>
            </StyledContainer>
        </StyledHeading>
    );
}
