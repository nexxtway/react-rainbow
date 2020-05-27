import styled, { keyframes } from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const sizeMap = {
    'x-large': '5.125rem',
    large: '3rem',
    medium: '2rem',
    small: '1.625rem',
    'x-small': '1.25rem',
    'xx-small': '1rem',
};
const StyledArcSpinner = attachThemeAttrs(styled.div)`
    display: inline-flex;
    height: ${props => sizeMap[props.size] || sizeMap.medium};
    width: ${props => sizeMap[props.size] || sizeMap.medium};
    border-radius: 50%;
    border: 2px solid ${props => props.palette.border.main};
    border-top: 2px solid transparent;
    animation: ${spin} 1s linear infinite;

    ${props =>
        props.variant === 'brand' &&
        `
            border: 2px solid ${props.palette.brand.main};
            border-top: 2px solid transparent;
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            border: 2px solid ${props.palette.getContrastText(props.palette.text.main)};
            border-top: 2px solid transparent;
        `};
    ${props =>
        props.variant === 'neutral' &&
        `
            border: 2px solid ${props.palette.background.highlight};
            border-top: 2px solid transparent;
        `};
`;

export default StyledArcSpinner;
