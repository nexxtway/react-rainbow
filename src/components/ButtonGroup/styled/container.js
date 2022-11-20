/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';

const StyledContainer = attachThemeAttrs(styled.div)`
    display: inline-flex;

    button {
        border-radius: 0;
        border-width: 1px;
        margin-left: -1px;

        &:focus {
            z-index: 1;
        }

        &:hover {
            z-index: 1;
        }
    }

    > button:first-child,
    > div:first-child > button {
        border-radius: 100px 0 0 100px;
    }

    > button:last-child,
    > div:last-child > button {
        border-radius: 0 100px 100px 0;
    }

    > button:only-child,
    > div:only-child > button {
        border-radius: 100px;
    }

    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow: ${props.shadows.shadow_10};
        background-color: ${props.palette.background.main};
        border-radius: 100px;
        > label:last-child > div {
            display: none;
        }
        button {
            border: none;
            &::after {
                content: '';
                position: absolute;
                right: 1px;
                height: 20px;
                width: 1px;
                background-color: ${props.palette.border.divider};
                box-sizing: border-box;
            }
        }
        button:last-of-type {
            &::after {
                content: none;
            }
        }
    `}

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
            > button:first-child {
                border-radius: ${BORDER_RADIUS_SQUARE} 0 0 ${BORDER_RADIUS_SQUARE};
            };
            > button:last-child {
                border-radius: 0 ${BORDER_RADIUS_SQUARE} ${BORDER_RADIUS_SQUARE} 0;
            };
        `};

    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
            > button:first-child {
                border-radius: ${BORDER_RADIUS_SEMI_SQUARE} 0 0 ${BORDER_RADIUS_SEMI_SQUARE};
            };
            > button:last-child {
                border-radius: 0 ${BORDER_RADIUS_SEMI_SQUARE} ${BORDER_RADIUS_SEMI_SQUARE} 0;
            };
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
            > button:first-child {
                border-radius: ${BORDER_RADIUS_SEMI_ROUNDED} 0 0 ${BORDER_RADIUS_SEMI_ROUNDED};
            };
            > button:last-child {
                border-radius: 0 ${BORDER_RADIUS_SEMI_ROUNDED} ${BORDER_RADIUS_SEMI_ROUNDED} 0;
            };
        `};

`;

export default StyledContainer;
