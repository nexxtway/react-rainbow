import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDropdown = attachThemeAttrs(styled.div)`
    position: absolute;
    z-index: 2000;
    left: 50%;
    float: left;
    min-width: 6rem;
    max-width: 20rem;
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: 0.875rem;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    transform: translateX(-50%);
    display: none;
    opacity: 0;
    transition: opacity 0.1s linear, visibility 0.1s linear;
    visibility: hidden;
    top: 100%;
    ${props =>
        props.isOpen &&
        `
            display: block;
            opacity: 1;
            transition: opacity 0.1s linear, visibility 0.1s linear;
            visibility: visible;
        `};
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
    ${props =>
        props.menuAlignment === 'left' &&
        `
            left: 0;
            transform: translateX(0);
        `};
    ${props =>
        props.menuAlignment === 'right' &&
        `
            left: auto;
            right: 0;
            transform: translateX(0);
        `};
    ${props =>
        props.menuAlignment === 'bottom' &&
        `
            top: auto;
            bottom: 100%;
        `};
    ${props =>
        props.menuAlignment === 'bottom-right' &&
        `
            top: auto;
            bottom: 100%;
            left: auto;
            right: 0;
            transform: translateX(0);
        `};
    ${props =>
        props.menuAlignment === 'bottom-left' &&
        `
            top: auto;
            bottom: 100%;
            left: 0;
            transform: translateX(0);
        `};
`;

export default StyledDropdown;
