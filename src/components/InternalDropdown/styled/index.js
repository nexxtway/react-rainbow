import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import SearchIcon from '../icons/searchIcon';

export const Dropdown = attachThemeAttrs(styled.div)`
    position: relative;
    overflow: hidden;
    z-index: 1999;
    width: 100%;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: 0.875rem;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    transition: opacity 0.1s linear, visibility 0.1s linear;

    &:focus,
    &:active {
        outline: none;
    }

    ${props =>
        props.isLoading &&
        `
            padding: 2rem;
    `}
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    overflow-y: auto;
    ${props =>
        props.showEmptyMessage &&
        `
        display: none;
    `}
`;

export const Arrow = attachThemeAttrs(styled.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1rem;
    position: absolute;
    width: 100%;
    z-index: 10;
    background: ${props => props.palette.background.main};
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        display: block;
        left: 50%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-color: ${props => props.palette.border.main};
        transform: rotate(135deg);
    }

    ${props =>
        props.direction === 'up' &&
        `
            top: 0;
            margin-top: 0.2rem;

            &::after {
                border-width: 0 0 0.15em 0.15em;
                top: 40%;
            }
    `}

    ${props =>
        props.direction === 'down' &&
        `
            bottom: 0;
            margin-bottom: 0.2rem;

            &::after {
                border-width: 0.15em 0.15em 0 0;
            }
    `}
`;

export const UlContainer = styled.div`
    position: relative;
    padding: 1rem 0;
`;

export const SearchContainer = attachThemeAttrs(styled.div)`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.palette.border.divider};

    ${props =>
        props.isLoading &&
        `
            margin-bottom: 1rem;
    `}
`;

export const Icon = styled(SearchIcon)`
    width: 16px;
    height: 16px;
    margin-left: 18px;
`;

export const InputSearch = attachThemeAttrs(styled.input)`
    font: inherit;
    background-color: transparent;
    border: 0;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    margin: 0;
    width: 100%;
    padding: 0;
    line-height: 45px;
    height: 45px;
    width: 100%;
    padding: 0 1rem;
    margin-top: 5px;

    :focus,
    :active {
        outline: 0;
        background-color: transparent;
        border: 0;
    }
`;

export const MessageContainer = attachThemeAttrs(styled.div)`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    `;

export const MessageDescription = attachThemeAttrs(styled.p)`
    font-size: 14px;
    line-height: 1.43;
    text-align: center;
    color: ${props => props.palette.text.header};
    margin-top: 12px;
    word-wrap: break-word;
`;

export const MessageHighLight = attachThemeAttrs(styled.p)`
    font-size: 14px;
    font-weight: 900;
    text-align: center;
    color: ${props => props.palette.text.main};
    word-wrap: break-word;
`;
