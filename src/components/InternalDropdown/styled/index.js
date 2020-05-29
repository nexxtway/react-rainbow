import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const Dropdown = attachThemeAttrs(styled.div)`
    position: relative;
    overflow: hidden;
    z-index: 2000;
    width: 100%;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: 0.875rem;
    padding: 1rem 0;
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
