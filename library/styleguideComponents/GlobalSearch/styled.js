import styled from 'styled-components';
import AlgoliaLogo from './algoliaConnectedComponents/AlgoliaLogo/index';
import SearchInput from './algoliaConnectedComponents/SearchInput';

export const StyledSearchInput = styled(SearchInput)`
    width: 320px;
    margin-right: 24px;
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
