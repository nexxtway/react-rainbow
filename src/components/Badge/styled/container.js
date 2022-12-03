import styled from 'styled-components';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../styles/borderRadius';
import attchThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attchThemeAttrs(styled.span).attrs(props => {
    const inverse = props.palette.text.label;
    return { inverse };
})`
    color: ${props => props.palette.text.label};
    background-color: ${props => props.palette.background.highlight};
    border: 1px solid;
    border-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    border-radius: 12rem;
    overflow: hidden;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;

    & + & {
        margin-left: 0.5rem;
    }

    ${props =>
        props.size === 'large' &&
        `
            padding: 0.65rem 0.9rem;
            font-size: 0.9rem;
        `};

    ${props =>
        props.size === 'small' &&
        `
            padding: 0.15rem 0.4rem;
            font-size: 0.7rem;
        `};

    ${props =>
        props.variant === 'lightest' &&
        `
            background-color: ${props.palette.background.main};
            border-color: ${props.palette.border.divider};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${props.palette.getContrastText(props.palette.brand.main)};
            background-color: ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            color: ${props.palette.brand.main};
            background-color: transparent;
            border-color: ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${props.palette.getContrastText(props.inverse)};
            background-color: ${props.inverse};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${props.palette.getContrastText(props.palette.warning.main)};
            background-color: ${props.palette.warning.main};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            color: ${props.palette.getContrastText(props.palette.success.main)};
            background-color: ${props.palette.success.main};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.palette.getContrastText(props.palette.error.main)};
            background-color: ${props.palette.error.main};
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
