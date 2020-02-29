import styled from 'styled-components';
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
    font-size: 0.75rem;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    padding: 0.25rem 0.75rem;
    border-radius: 12rem;
    overflow: hidden;

    & + & {
        margin-left: 0.5rem;
    }

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
`;

export default StyledContainer;
