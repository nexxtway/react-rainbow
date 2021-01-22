import styled from 'styled-components';
import { GlobalSearch } from '@rainbow-modules/search';
import MediumIcon from '../RibbonRenderer/mediumIcon';

export const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px 20px 64px auto;
    z-index: 3000;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledIcon = styled(MediumIcon)`
    width: 22px;
    height: 22px;
`;

export const ResultItemContainer = styled.div`
    background: ${props => props.theme.rainbow.palette.background.main};
    padding: 12px;
    border-radius: 12px;
    box-shadow: ${props => props.theme.rainbow.shadows.shadow_3};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 8px;

    &:hover {
        box-shadow: ${props => props.theme.rainbow.shadows.shadow_4};
        cursor: pointer;
    }
`;

export const IconContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    min-width: 44px;
    height: 44px;
    background: ${props => props.theme.rainbow.palette.background.secondary};
    color: ${props => props.theme.rainbow.palette.border.divider};
    border-radius: 44px;
`;

export const OptionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    width: 100%;
`;

export const Label = styled.span`
    font-size: 16px;
    color: ${props => props.theme.rainbow.palette.text.main};
    line-height: 1.5;
`;

export const Post = styled.span`
    font-size: 12px;
    font-family: 'Lato Bold';
    color: ${props => props.theme.rainbow.palette.text.main};
    line-height: 1.5;
`;

export const Information = styled.p`
    margin-top: 5px;
    font-size: 11px;
    font-family: 'Lato';
    color: ${props => props.theme.rainbow.palette.text.header};
    line-height: 1.5;

    ${props =>
        props.variant === 'author' &&
        `
        color: ${props.theme.rainbow.palette.text.main};
        margin-top: 20px;

    `};
`;

export const Description = styled.span`
    font-size: 14px;
    color: ${props => props.theme.rainbow.palette.text.header};
    line-height: 1.5;
`;

export const PostContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const StyledImage = styled.img`
    width: 100px;
    border-radius: 5px;
`;

export const PostText = styled.div`
    margin-left: 10px;
`;
