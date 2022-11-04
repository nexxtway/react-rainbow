import styled from 'styled-components';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';

import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInputContainer = attachThemeAttrs(styled.div)`
    position: relative;
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    padding: 1px 1rem 1px 1px;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;
    display: flex;

    ${props =>
        props.size === 'large' &&
        `
            padding: 1px 1.2rem 1px 1px;
            line-height: 3.275rem;
            font-size: ${FONT_SIZE_HEADING_MEDIUM};
            height: 3.4rem;
        `};

    ${props =>
        props.size === 'small' &&
        `
            padding:1px 0.8rem 1px 1px;
            line-height: 1.775rem;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            height: 1.9rem;
        `};


    ${props =>
        props.isFocus &&
        `
        outline: 0;
        padding: 0 0.9375rem 0 0;
        border: 2px solid ${props.palette.brand.main};
        background-color: ${props.palette.background.main};
        box-shadow: ${props.shadows.brand};
        ${props.size === 'large' &&
            `
                padding: 0 1.125rem 0 0;
            `};
    
        ${props.size === 'small' &&
            `
                padding: 0 0.75rem 0 0;
            `};
    `};

    ${props =>
        props.error &&
        `
        padding: 0 0.9375rem 0 0;
        background-color: ${props.palette.background.main};
        border: 2px solid ${props.palette.error.main};
        background-clip: padding-box;

        ${props.size === 'large' &&
            `
                padding: 0 1.125rem 0 0;
            `};
    
        ${props.size === 'small' &&
            `
                padding: 0 0.75rem 0 0;
            `};

        ${props.isFocus &&
            `
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            outline: 0;
        `}

    `}

    ${props =>
        props.readOnly &&
        `
        padding: 0 1rem 0 0;
        background-color: transparent;
        border: 2px transparent solid;
        box-sizing: border-box;
        box-shadow: inherit;
    `};


    &[disabled] {
        padding: 1px 0.9375rem 1px 1px;
        background-color: ${props => props.palette.background.disabled};
        border: 1px solid ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;
        ${props => !props.icon && 'padding-right: 0.9375rem;'}

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.background.disabled};
            border: 1px solid ${props => props.palette.border.disabled};
        }
    }

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export default StyledInputContainer;
