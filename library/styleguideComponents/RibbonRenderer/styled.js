import styled from 'styled-components';

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
    z-index: 3000;
    border-bottom: 1px solid #f4f6f9;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-right: 32px;

    @media (max-width: 800px) {
        margin-right: 24px;
    }

    @media (max-width: 600px) {
        margin-right: 8px;
    }
`;

export const StyledGitHubContianer = styled.div`
    padding-top: 7px;
    margin-right: 16px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledGithubLink = styled.a`
    width: 32px;
    height: 32px;

    @media (max-width: 800px) {
        margin-right: 54px;
        width: 28px;
        height: 28px;
    }
`;

export const StyledGithubIcon = styled.img`
    width: 100%;
    height: 100%;
`;
