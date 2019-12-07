import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_GRAY_4,
} from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { SHADOW_5, SHADOW_1 } from '../../../styles/shadows';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButton = styled.button.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand, success, error } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const { main: successMainColor, dark: successDarkColor } = success;
    const { main: errorMainColor, dark: errorDarkColor } = error;

    return {
        brandMainColor,
        brandDarkColor,
        successMainColor,
        successDarkColor,
        errorMainColor,
        errorDarkColor,
        getContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
        successShadow: `0 0 2px ${successMainColor}`,
        errorShadow: `0 0 2px ${errorMainColor}`,
    };
})`
    font: inherit;
    align-items: center;
    display: inline-flex;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    justify-content: center;
    position: relative;
    background: transparent;
    background-clip: border-box;
    border: 1px solid transparent;
    border-radius: 100px;
    line-height: 2.375rem;
    text-decoration: none;
    color: ${props => props.brandMainColor};
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

    &:hover,
    &:focus {
        color: ${props => props.brandDarkColor};
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.brandShadow};
    }

    &:active {
        color: ${props => props.brandDarkColor};
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    &[disabled] {
        color: ${COLOR_GRAY_2};
        cursor: default;
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;
    }

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${props.brandMainColor};

            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_GRAY_1};
            }

            &[disabled] {
                background-color: ${props.isLoading ? COLOR_WHITE : 'transparent'};
            }
        `};
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
            &:visited {
                color: ${brandMainContrastText}
            }

            &:hover,
            &:focus,
            &:active {
                background-color: ${props.brandDarkColor};
                border-color: ${props.brandDarkColor};
                color: ${brandDarkContrastText};
            }

            &[disabled] {
                background-color: ${props.isLoading ? props.brandMainColor : COLOR_GRAY_1};
                border-color: ${props.isLoading ? props.brandMainColor : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `
        );
    }};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.brandMainColor};
            color: ${props.brandMainColor};

            &:hover,
            &:focus,
            &:active {
                border-color: ${props.brandDarkColor};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.isLoading ? props.brandMainColor : COLOR_GRAY_2};
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
        `   background-color: transparent;
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
                border-color: ${props.isLoading ? COLOR_WHITE : COLOR_GRAY_4};
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props => {
        const errorMainContrastText = props.getContrastText(props.errorMainColor);
        const errorDarkContrastText = props.getContrastText(props.errorDarkColor);

        return (
            props.variant === 'destructive' &&
            `
            background-color: ${props.errorMainColor};
            border: 1px solid ${props.errorMainColor};
            color: ${errorMainContrastText};

            &:link,
            &:visited {
                color: ${errorMainContrastText};
            }
        
            &:hover,
            &:focus {
                background-color: ${props.errorDarkColor};
                color: ${errorDarkContrastText};
            }

            &:focus {
                box-shadow: ${props.errorShadow};
            }
        
            &:active {
                background-color: ${props.errorDarkColor};
                border-color: ${props.errorDarkColor};
                color: ${errorDarkContrastText};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? props.errorMainColor : COLOR_GRAY_1};
                border-color: ${props.isLoading ? props.errorMainColor : COLOR_GRAY_1};
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
            &:visited {
                color: ${successMainContrastText};
            }
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${props.successDarkColor};
                border-color: ${props.successDarkColor};
                color: ${successDarkContrastText};
            }

            &:focus {
                box-shadow: ${props.successShadow};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? props.successMainColor : COLOR_GRAY_1};
                border-color: ${props.isLoading ? props.successMainColor : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `
        );
    }};
    ${props => props.shaded && `box-shadow: ${SHADOW_1};`};
`;

export default StyledButton;
