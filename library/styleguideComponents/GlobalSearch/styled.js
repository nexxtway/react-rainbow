import styled from 'styled-components';
import AlgoliaLogo from './algoliaConnectedComponents/AlgoliaLogo/index';

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 14px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    width: 600px;
    padding: 12px 0;
    margin-top: 10px;
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
`;

export const RightContent = styled.div`
    width: 75%;
    padding: 4px 12px 8px 12px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 18px;
    color: rgb(42, 48, 57);
    margin-bottom: 4px;
`;

export const Container = styled.div`
    position: relative;
`;

export const Description = styled.h3`
    font-size: 14px;
    color: #8592a0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    max-lines: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const StyledAlgoliaLogo = styled(AlgoliaLogo)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8592a0;
    margin-top: 8px;
`;
