/* eslint-disable indent */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import { COLOR_WHITE, COLOR_GRAY_1, COLOR_GRAY_3, COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledButton = attachThemeAttrs(styled.button)`
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
    color: ${props => props.palette.brand.main};
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
        color: ${props => props.palette.brand.dark};
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }

    &:active {
        color: ${props => props.palette.brand.dark};
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    &[disabled] {
        color: ${props => props.palette.text.disabled};
        cursor: default;
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;
    }

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.divider};
            color: ${props.palette.brand.main};

            &:hover,
            &:focus,
            &:active {
                background-color: ${props.palette.action.active};
            }

            &[disabled] {
                background-color: ${
                    props.isLoading ? props.palette.background.main : 'transparent'
                };
            }
        `};
    ${props => {
        const brandMainContrastText = props.palette.getContrastText(props.palette.brand.main);
        const brandDarkContrastText = props.palette.getContrastText(props.palette.brand.dark);

        return (
            props.variant === 'brand' &&
            `
            background-color: ${props.palette.brand.main};
            border: 1px solid ${props.palette.brand.main};
            color: ${brandMainContrastText};

            &:link,
            &:visited {
                color: ${brandMainContrastText}
            }

            &:hover,
            &:focus,
            &:active {
                background-color: ${props.palette.brand.dark};
                border-color: ${props.palette.brand.dark};
                color: ${brandDarkContrastText};
            }

            &[disabled] {
                background-color: ${props.isLoading ? props.palette.brand.main : COLOR_GRAY_1};
                border-color: ${
                    props.isLoading ? props.palette.brand.main : props.palette.border.divider
                };
                color: ${props.palette.text.disabled};
            }
        `
        );
    }};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.brand.main};

            &:hover,
            &:focus,
            &:active {
                border-color: ${props.palette.brand.dark};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${
                    props.isLoading ? props.palette.brand.main : props.palette.border.divider
                };
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
                box-shadow: ${props.shadows.shadow_5};
            }
        
            &[disabled] {
                background-color: transparent;
                color: ${props.palette.text.disabled};
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
                box-shadow: ${props.shadows.shadow_5};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.isLoading ? COLOR_WHITE : COLOR_GRAY_4};
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props => {
        const errorMainContrastText = props.palette.getContrastText(props.palette.error.main);
        const errorDarkContrastText = props.palette.getContrastText(props.palette.error.dark);

        return (
            props.variant === 'destructive' &&
            `
            background-color: ${props.palette.error.main};
            border: 1px solid ${props.palette.error.main};
            color: ${errorMainContrastText};

            &:link,
            &:visited {
                color: ${errorMainContrastText};
            }
        
            &:hover,
            &:focus {
                background-color: ${props.palette.error.dark};
                border-color: ${props.palette.error.dark};
                color: ${errorDarkContrastText};
            }

            &:focus {
                box-shadow: ${props.shadows.error};
            }
        
            &:active {
                background-color: ${props.palette.error.dark};
                border-color: ${props.palette.error.dark};
                color: ${errorDarkContrastText};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? props.palette.error.main : COLOR_GRAY_1};
                border-color: ${props.isLoading ? props.palette.error.main : COLOR_GRAY_1};
                color: ${props.palette.text.disabled};
            }
        `
        );
    }};
    ${props => {
        const successMainContrastText = props.palette.getContrastText(props.palette.success.main);
        const successDarkContrastText = props.palette.getContrastText(props.palette.success.dark);

        return (
            props.variant === 'success' &&
            `
            background-color: ${props.palette.success.main};
            border: 1px solid ${props.palette.success.main};
            color: ${successMainContrastText};

            &:link,
            &:visited {
                color: ${successMainContrastText};
            }
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${props.palette.success.dark};
                border-color: ${props.palette.success.dark};
                color: ${successDarkContrastText};
            }

            &:focus {
                box-shadow: ${props.shadows.success};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? props.palette.success.main : COLOR_GRAY_1};
                border-color: ${props.isLoading ? props.palette.success.main : COLOR_GRAY_1};
                color: ${props.palette.text.disabled};
            }
        `
        );
    }};
    ${props => props.shaded && `box-shadow: ${props.shadows.shadow_1};`};
`;

export default StyledButton;
