import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledContainer = styled.div`
    position: relative;
    display: inline-block;

    &:hover,
    &:focus {
        outline: 0;
    }
`;

export const StyledContent = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
`;

export const StyledDropdown = attachThemeAttrs(styled.div)`
    min-width: 6rem;
    max-width: 20rem;
    max-height: 372px;
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
    border-radius: 0.875rem;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_12};
    display: block;
    opacity: 1;
    transition: opacity 0.1s linear, visibility 0.1s linear;
    visibility: visible;
    overflow-y: auto;
    overflow-x: hidden;
    top: 100%;

    ${props =>
        props.isLoading &&
        `
            padding: 2rem;
            height: 3rem;
            width: 3rem;
        `};
    ${props => props.menuSize === 'xx-small' && 'min-width: 6rem;'}
    ${props => props.menuSize === 'x-small' && 'min-width: 12rem;'}
    ${props => props.menuSize === 'small' && 'min-width: 15rem;'}
    ${props => props.menuSize === 'medium' && 'min-width: 20rem;'}
    ${props =>
        props.menuSize === 'large' &&
        `
            min-width: 25rem;
            max-width: 512px;
        `};    
`;
