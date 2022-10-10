import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';

const StyledSelect = attachThemeAttrs(styled.select)`
    font: inherit;
    margin: 0;
    text-transform: none;
    width: 100%;
    appearance: none;
    line-height: 2rem;
    height: 2.5rem;
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    padding: 0 1.8rem 0 ${PADDING_MEDIUM};
    background-color: ${props => props.palette.background.main};
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    transition: all 0.1s linear;
    box-sizing: border-box;

    ${props =>
        props.size === 'large' &&
        `
            padding-left: 1.2rem;
            line-height: 3.125rem;
            font-size: ${FONT_SIZE_HEADING_MEDIUM};
            height: 3.4rem;
        `};

    ${props =>
        props.size === 'small' &&
        `
            padding-left: 0.8rem;
            line-height: 1.6rem;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            height: 1.9rem;
        `};

    &::-ms-expand {
        display: none;
    }

    &:focus,
    &:active,
    &:visited {
        outline: 0;
        padding-left: 0.9375rem;
        padding-right: 1.7375rem;
        border: 0.125rem ${props => props.palette.brand.main} solid;
        box-shadow: ${props => props.shadows.brand};
        ${props =>
            props.size === 'large' &&
            `
                padding-left: 1.125rem;
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                padding-left: 0.75rem;
            `};
    }

    &[disabled] {
        user-select: none;
        cursor: not-allowed;
        background-color: ${props => props.palette.background.disabled};
        border-color: ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.action.active};
            border: 0.0626rem ${props => props.palette.border.divider} solid;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;
            ${props =>
                props.size === 'large' &&
                `
                    padding-left: 1.2rem;
                `};
        
            ${props =>
                props.size === 'small' &&
                `
                    padding-left: 0.8rem;
                `};
        }
    }

    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow:${props.disabled ? '' : props.shadows.shadow_10};
        border: 1px solid transparent;
    `}

    ${props =>
        props.error &&
        `
            background-color: ${props.palette.background.main};
            border: 0.125rem ${props.palette.error.main} solid;
            background-clip: padding-box;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;

            &:focus, &:active {
                box-shadow: ${props.shadows.error};
                border: 0.125rem ${props.palette.error.main} solid;
            }
        `};
`;

export default StyledSelect;
