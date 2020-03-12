import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_WHITE, COLOR_GRAY_3, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten } from '../../../styles/helpers/color';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

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
    color: ${props => props.palette.text.label};
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
        color: ${props => props.palette.brand.dark};
    }

    &:active {
        transform: scale(0.7);
        transition: all 0.3s ease;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }

    &[disabled] {
        color: ${props => props.palette.text.disabled};
        cursor: default;
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;

        svg {
            fill: ${props => props.palette.text.disabled};
        }
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
                &:visited,
                &:active {
                    color: ${brandMainContrastText};
                }
            
                &:hover,
                &:focus,
                &:active {
                    background-color: ${props.palette.brand.dark};
                    border: 1px solid ${props.palette.brand.dark};
                    color: ${brandDarkContrastText};
                }
            
                &[disabled] {
                    background-color: ${props.palette.background.disabled};
                    border: 1px solid ${props.palette.border.disabled};
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
                &:visited,
                &:active {
                    color: ${successMainContrastText};
                }
            
                &:hover,
                &:focus,
                &:active {
                    background-color: ${props.palette.success.dark};
                    border: 1px solid ${props.palette.success.dark};
                    color: ${successDarkContrastText};
                }
            
                &[disabled] {
                    background-color: ${props.palette.background.disabled};
                    border: 1px solid ${props.palette.border.disabled};
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
        `
            background-color: transparent;
            border: 1px solid ${props.inverse.border};
            color: ${props.inverse.text};
        
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
                border-color: ${props.inverse.disabled};
                color: ${props.inverse.disabled};
            }
        `};
    ${props =>
        props.shaded &&
        `
            box-shadow: ${props.shadows.shadow_3};
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
