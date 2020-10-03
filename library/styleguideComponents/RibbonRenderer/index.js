/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import GitHubButton from 'react-github-btn';
import githublogo from './image/github.svg';
import {
    StyledContainer,
    StyledGitHubContianer,
    StyledGithubIcon,
    StyledGithubLink,
    StyledHeading,
} from './styled';

export default function RibbonRenderer() {
    return (
        <StyledHeading>
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
                >
                    <StyledGithubIcon src={githublogo} alt="github logo" />
                </StyledGithubLink>
            </StyledContainer>
        </StyledHeading>
    );
}
