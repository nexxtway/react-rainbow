/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import GitHubButton from 'react-github-btn';
import StackoverflowIcon from './stackoverflowIcon';
import GlobalSearch from '../GlobalSearch';
import {
    StyledContainer,
    StyledGitHubContianer,
    StyledGithubIcon,
    StyledGithubLink,
    StyledHeading,
    StyledStackoverflowLink,
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
                <StyledGithubLink
                    href="https://github.com/nexxtway/react-rainbow"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github repository"
                >
                    <StyledGithubIcon />
                </StyledGithubLink>
                <StyledStackoverflowLink
                    href="https://stackoverflow.com/questions/tagged/react-rainbow%2bor%2breact-rainbow-components%2bor%2brainbow-components?tab=Active"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Stackoverflow"
                >
                    <StyledGithubIcon as={StackoverflowIcon} />
                </StyledStackoverflowLink>
            </StyledContainer>
        </StyledHeading>
    );
}
