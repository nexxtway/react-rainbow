/* eslint-disable indent */
import styled from 'styled-components';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { COLOR_WHITE, COLOR_GRAY_3, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten } from '../../../styles/helpers/color';

const StyledButton = attachThemeAttrs(styled.button).attrs(props => {
    if (props.palette.isDark) {
        return {
            inverse: {
                text: COLOR_DARK_1,
                active: lighten(COLOR_DARK_1, 0.6),
                border: COLOR_DARK_1,
                disabled: lighten(COLOR_DARK_1, 0.6),
            },
        };
    }
    return {
        inverse: {
            text: COLOR_WHITE,
            active: COLOR_GRAY_3,
            border: COLOR_WHITE,
            disabled: COLOR_GRAY_3,
        },
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
        (props.variant === 'neutral' || (props.variant === 'border-filled' && props.isLoading)) &&
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
                background-color: ${
                    props.isLoading ? props.palette.brand.main : props.palette.background.disabled
                };
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
                background-color: ${
                    props.isLoading ? props.palette.error.main : props.palette.background.disabled
                };
                border-color: ${
                    props.isLoading ? props.palette.error.main : props.palette.background.disabled
                };
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
                background-color: ${
                    props.isLoading ? props.palette.success.main : props.palette.background.disabled
                };
                border-color: ${
                    props.isLoading ? props.palette.success.main : props.palette.background.disabled
                };
                color: ${props.palette.text.disabled};
            }
        `
        );
    }};
    ${props =>
        props.variant === 'border' &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.border.divider};
            color: ${props.palette.text.label};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: transparent;
                border: 1px solid ${props.palette.brand.dark};
                color: ${props.palette.brand.dark};
            }
        
            &[disabled] {
                background-color: transparent;
                border: 1px solid ${props.palette.border.disabled};
                color: ${props.palette.text.disabled};
            }
        `};
    ${props =>
        props.variant === 'border-filled' &&
        !props.isLoading &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.divider};
            color: ${props.palette.text.label};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${props.palette.action.active};
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
            color: ${props.inverse.text};

            &:hover,
            &:focus,
            &:active {
                color: ${props.inverse.active};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${props.shadows.shadow_5};
            }
        
            &[disabled] {
                background-color: transparent;
                color: ${props.inverse.disabled};
            }
        `};
    ${props =>
        props.variant === 'border-inverse' &&
        `   background-color: transparent;
            border: 1px solid ${props.inverse.text};
            color: ${props.inverse.border};

            &:hover,
            &:focus,
            &:active {
                border-color: ${props.inverse.active};
                color: ${props.inverse.active};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${props.shadows.shadow_5};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.isLoading ? props.inverse.text : props.inverse.disabled};
                color: ${props.inverse.disabled};
            }
        `};   
    
    ${props => props.shaded && `box-shadow: ${props.shadows.shadow_1};`};
`;

export default StyledButton;
