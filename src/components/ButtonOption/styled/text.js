import styled from 'styled-components';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledText = attachThemeAttrs(styled.span)`
    font: inherit;
    align-items: center;
    display: inline-flex;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    justify-content: center;
    position: relative;
    background-clip: border-box;
    border: 1px solid transparent;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    text-align: center;
    vertical-align: middle;
    transition: border 0.15s linear;
    overflow: visible;
    text-transform: none;
    appearance: button;
    box-sizing: border-box;
    border-radius: 0;
    border-width: 1px;
    margin-left: -1px;
    height: 2.5rem;
    line-height: 2.5;

    ::-moz-focus-inner,
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover,
    &:focus,
    &:active,
    &:visited {
        text-decoration: none;
    }    

    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.divider};
    color: ${props => props.palette.text.label};
    transition: border 0.15s linear;

    &:hover,
    &:focus,
    &:active {
        color: ${props => props.palette.brand.dark};
        z-index: 1;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }

    &:active {
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    svg,
    span {
        width: 1rem !important;
        height: 1rem !important;
        font-size: 1rem !important;
    }

    ${props =>
        props.size === 'x-small' &&
        `
            height: 1.25rem;
            line-height: 1.25;
            padding: 0 0.3rem;
            font-size: 0.65rem !important;

            svg, span {
                width: 0.65rem !important;
                height: 0.65rem !important;
                font-size: 0.65rem !important;
            }
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 1.75rem;
            line-height: 1.75;
            padding: 0 0.7rem;
            font-size: 0.875rem !important;

            svg, span {
                width: 0.875rem !important;
                height: 0.875rem !important;
        
                font-size: 0.875rem !important;
            }
        `};
    ${props =>
        props.size === 'large' &&
        `
            height: 3rem;
            line-height: 3;

            svg, span {
                width: 1.5rem !important;
                height: 1.5rem !important;
                font-size: 1rem !important;
            }
        `};

    ${props =>
        props.checked &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.brand.main};
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.palette.border.divider};
            }
        `};
`;

export default StyledText;
