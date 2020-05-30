import styled, { keyframes } from 'styled-components';
import getSizeValue from '../helpers/getSizeValue';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const dashXLarge = keyframes`
    0% {
        stroke-dasharray: 1, 248;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 177, 248;
        stroke-dashoffset: -75;
    }

    100% {
        stroke-dasharray: 177, 248;
        stroke-dashoffset: -246;
    }
`;
const dashLarge = keyframes`
    0% {
        stroke-dasharray: 1, 141;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 100, 141;
        stroke-dashoffset: -43;
    }

    100% {
        stroke-dasharray: 100, 141;
        stroke-dashoffset: -139;
    }
`;
const dashMedium = keyframes`
    0% {
        stroke-dasharray: 1, 91;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 65, 91;
        stroke-dashoffset: -28;
    }

    100% {
        stroke-dasharray: 65, 91;
        stroke-dashoffset: -89;
    }
`;
const dashSmall = keyframes`
    0% {
        stroke-dasharray: 1, 72;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 51, 72;
        stroke-dashoffset: -22;
    }

    100% {
        stroke-dasharray: 51, 72;
        stroke-dashoffset: -70;
    }
`;
const dashXSmall = keyframes`
    0% {
        stroke-dasharray: 1, 53;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 38, 53;
        stroke-dashoffset: -16;
    }

    100% {
        stroke-dasharray: 38, 53;
        stroke-dashoffset: -51;
    }
`;
const dashXXSmall = keyframes`
    0% {
        stroke-dasharray: 1, 41;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 29, 41;
        stroke-dashoffset: -12;
    }

    100% {
        stroke-dasharray: 29, 41;
        stroke-dashoffset: -39;
    }
`;
const dashMap = {
    'x-large': dashXLarge,
    large: dashLarge,
    medium: dashMedium,
    small: dashSmall,
    'x-small': dashXSmall,
    'xx-small': dashXXSmall,
};

const StyledArcSpinner = attachThemeAttrs(styled.svg)`
    animation: rotate 1s linear infinite;
    display: block;
    transform-origin: 50% 50%;
    width: ${props => getSizeValue(props.size)}px;
    height: ${props => getSizeValue(props.size)}px;

    & .path {
        stroke: ${props => props.palette.border.main};
        stroke-linecap: round;
        animation: ${props => dashMap[props.size] || dashMap.medium} 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    ${props =>
        props.variant === 'brand' &&
        `
            & .path {
                stroke: ${props.palette.brand.main};
            }
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            & .path {
                stroke: ${props.palette.getContrastText(props.palette.text.main)};
            }
        `};
    ${props =>
        props.variant === 'neutral' &&
        `
            & .path {
                stroke: ${props.palette.background.highlight};
            }
        `};
`;

export default StyledArcSpinner;
