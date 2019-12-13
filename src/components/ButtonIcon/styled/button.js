import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_GRAY_4,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { SHADOW_5, SHADOW_3 } from '../../../styles/shadows';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButton = styled.button.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand, success } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const { main: successMainColor, dark: successDarkColor } = success;

    return {
        brandMainColor,
        brandDarkColor,
        successMainColor,
        successDarkColor,
        getContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    font: inherit;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    background: transparent;
    background-clip: border-box;
    border: 0;
    border-radius: ${BORDER_RADIUS_2};
    line-height: 1.875rem;
    text-decoration: none;
    color: ${COLOR_GRAY_4};
    cursor: pointer;
    white-space: normal;
    user-select: none;
    vertical-align: middle;
    overflow: visible;
    text-transform: none;
    appearance: button;
    box-sizing: border-box;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover,
    &:focus,
    &:active {
        color: ${props => props.brandDarkColor};
    }

    &:active {
        transform: scale(0.7);
        transition: all 0.3s ease;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.brandShadow};
    }

    &[disabled] {
        color: ${COLOR_GRAY_2};
        cursor: default;
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;

        svg {
            fill: ${COLOR_GRAY_2};
        }
    }

    ${props => {
        const brandMainContrastText = props.getContrastText(props.brandMainColor);
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);
        return (
            props.variant === 'brand' &&
            `
                background-color: ${props.brandMainColor};
                border: 1px solid ${props.brandMainColor};
                color: ${brandMainContrastText};
                
                &:link,
                &:visited,
                &:active {
                    color: ${brandMainContrastText};
                }
            
                &:hover,
                &:focus,
                &:active {
                    background-color: ${props.brandDarkColor};
                    border: 1px solid ${props.brandDarkColor};
                    color: ${brandDarkContrastText};
                }
            
                &[disabled] {
                    background-color: ${COLOR_GRAY_1};
                    border: 1px solid ${COLOR_GRAY_1};
                    color: ${COLOR_GRAY_2};
                }
            `
        );
    }};
    ${props => {
        const successMainContrastText = props.getContrastText(props.successMainColor);
        const successDarkContrastText = props.getContrastText(props.successDarkColor);

        return (
            props.variant === 'success' &&
            `
                background-color: ${props.successMainColor};
                border: 1px solid ${props.successMainColor};
                color: ${successMainContrastText};
                
                &:link,
                &:visited,
                &:active {
                    color: ${successMainContrastText};
                }
            
                &:hover,
                &:focus,
                &:active {
                    background-color: ${props.successDarkColor};
                    border: 1px solid ${props.successDarkColor};
                    color: ${successDarkContrastText};
                }
            
                &[disabled] {
                    background-color: ${COLOR_GRAY_1};
                    border: 1px solid ${COLOR_GRAY_1};
                    color: ${COLOR_GRAY_2};
                }
            `
        );
    }};
    ${props =>
        props.variant === 'border' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: transparent;
                border: 1px solid ${props.brandDarkColor};
                color: ${props.brandDarkColor};
            }
        
            &[disabled] {
                background-color: transparent;
                border: 1px solid ${COLOR_GRAY_2};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props =>
        props.variant === 'border-filled' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_GRAY_1};
            }
        
            &[disabled] {
                background-color: transparent;
            }
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            background-color: transparent;
            border: 1px solid transparent;
            color: ${COLOR_WHITE};
        
            &:hover,
            &:focus,
            &:active {
                color: ${COLOR_GRAY_3};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${SHADOW_5};
            }
        
            &[disabled] {
                background-color: transparent;
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props =>
        props.variant === 'border-inverse' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_WHITE};
            color: ${COLOR_WHITE};
        
            &:hover,
            &:focus,
            &:active {
                border-color: ${COLOR_GRAY_3};
                color: ${COLOR_GRAY_3};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${SHADOW_5};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${COLOR_GRAY_4};
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props =>
        props.shaded &&
        `
            box-shadow: ${SHADOW_3};
        `};
    ${props =>
        props.size === 'xx-small' &&
        `
            width: 1rem;
            height: 1rem;
            line-height: 1;

            svg {
                width: 0.55rem !important;
                height: 0.55rem !important;
                font-size: 0.55rem !important;
            }
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 1.25rem;
            height: 1.25rem;
            line-height: 1.25;

            svg {
                width: 0.6rem !important;
                height: 0.6rem !important;
                font-size: 0.6rem !important;
            }
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 1.65rem;
            height: 1.65rem;
            line-height: 1.65;

            svg {
                width: 0.65rem !important;
                height: 0.65rem !important;
        
                font-size: 0.65rem !important;
            }
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5;

            svg {
                width: 1rem !important;
                height: 1rem !important;
                font-size: 1rem !important;
            }
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 3rem;
            height: 3rem;
            line-height: 3;

            svg {
                width: 1.5rem !important;
                height: 1.5rem !important;
                font-size: 1rem !important;
            }
        `};
`;

export default StyledButton;
