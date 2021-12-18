import styled from 'styled-components';
import GithubIcon from './githubIcon';
import TwitterIcon from '../../exampleComponents/Icons/twitter';

export const StyledHeading = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    left: 0;
    height: 68px;
    background-color: #fff;
    width: 100vw;
    z-index: 100;
    border-bottom: 1px solid #f4f6f9;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-right: 32px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledGitHubContianer = styled.div`
    padding-top: 7px;
    margin-right: 16px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledLink = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    color: #24292e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px;

    :hover {
        background: rgba(1, 1, 1, 0.05);
        color: #000;
    }
`;

export const StyledIcon = styled(GithubIcon)`
    width: 22px;
    height: 22px;
`;

export const StyledGithubIcon = styled(GithubIcon)`
    width: 26px;
    height: 26px;
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
    width: 22px;
    height: 22px;
    color: #1ca2f1;
`;
