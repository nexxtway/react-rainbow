import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
import { PADDING_X_SMALL, PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import {
    FONT_SIZE_TEXT_MEDIUM,
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_TEXT_SMALL,
} from '../../../styles/fontSizes';

const variants = ['brand', 'success', 'warning', 'error'];
const StyledContainer = attachThemeAttrs(styled.span)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    border-radius: ${BORDER_RADIUS_2};
    padding: 0 ${PADDING_SMALL};
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-property: margin, max-height, opacity, top;
    height: 2rem;
    line-height: 2rem;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    letter-spacing: 0.5;
    background-color: ${props => props.palette.background.secondary};
    border: 1px solid ${props => props.palette.border.divider};
    color: ${props => props.palette.text.label};
    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.divider};
            color: ${props.palette.text.label};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.brand.main};
        `};
    ${props =>
        variants.includes(props.variant) &&
        `
            background-color: ${props.palette[props.variant].main};
            border: 1px solid ${props.palette[props.variant].main};
            color: ${props.palette.getContrastText(props.palette[props.variant].main)};
        `};

        ${props =>
            props.size === 'large' &&
            `
                font-size: ${FONT_SIZE_TEXT_LARGE};
                height: 2.9rem;
                padding: 0 ${PADDING_MEDIUM};
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                font-size: ${FONT_SIZE_TEXT_SMALL};
                height: 1.6rem;
                padding: 0 ${PADDING_X_SMALL};
            `};

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};
    
    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
    
`;

export default StyledContainer;
