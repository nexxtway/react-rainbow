import styled from 'styled-components';
import AlgoliaLogo from './algoliaConnectedComponents/AlgoliaLogo/index';
import SearchInput from './algoliaConnectedComponents/SearchInput';
import SearchIcon from './algoliaConnectedComponents/SearchInput/searchIcon';

export const StyledSearchInput = styled(SearchInput)`
    width: 320px;
    margin-right: 24px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 14px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    width: 600px;
    padding: 12px 0;
    margin-top: 4px;
    margin-right: 1.5rem;
`;

export const ItemContainer = styled.a`
    background: white;
    width: 100%;
    padding: 16px 0;
    display: flex;

    :hover {
        background: rgba(246, 247, 249, 1);
        text-decoration: none;
    }
`;

export const LeftContent = styled.div`
    width: 25%;
    border-right: 1px solid #e5e7eb;
    padding: 4px 8px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Label = styled.h3`
    font-size: 14px;
    color: #8592a0;
    text-transform: capitalize;
`;

export const RightContent = styled.div`
    width: 75%;
    margin: 4px 12px 8px 12px;
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 5em;
    line-height: 1.5em;
`;

export const Title = styled.span`
    font-size: 18px;
    color: rgb(42, 48, 57);
`;

export const TitleHighlight = styled.span`
    font-size: 18px;
    color: rgb(42, 48, 57);
    margin-bottom: 4px;
    font-weight: 900;
    background: rgba(229, 231, 235, 0.2);
    font-family: 'Lato Bold', Arial, sans-serif;
`;

export const Container = styled.div`
    position: relative;
`;

export const Description = styled.span`
    font-size: 14px;
    color: #8592a0;
    margin-top: 8px;
`;

export const DescriptionHighlight = styled.span`
    font-size: 14px;
    color: rgb(42, 48, 57);
    background: rgba(229, 231, 235, 0.2);
    font-weight: 900;
    font-family: 'Lato Bold', Arial, sans-serif;
`;

export const StyledAlgoliaLogo = styled(AlgoliaLogo)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8592a0;
    margin-top: 8px;
`;

export const StyledEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 32px auto;
    box-sizing: border-box;
`;

export const StyledEmptyTitle = styled.h1`
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    color: rgb(42, 48, 57);
    margin: 0;
    padding: 0;
`;

export const StyledEmptyDescription = styled.h2`
    font-size: 14px;
    text-align: center;
    color: rgb(42, 48, 57);
    margin: 0;
    margin-top: 12px;
    padding: 0;
    font-weight: inherit;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
`;
