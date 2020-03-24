import styled from 'styled-components';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { COLOR_WHITE, COLOR_GRAY_3, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten } from '../../../styles/helpers/color';

const StyledText = attachThemeAttrs(styled.span).attrs(props => {
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

    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.divider};
    color: ${props => props.palette.text.label};
    transition: border 0.15s linear;

    &:hover,
    &:focus,
    &:active {
        color: ${props => props.palette.brand.dark};
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }

    &:active {
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    &[disabled] {
        color: ${props => props.palette.text.disabled};
        cursor: default;
        background-color: transparent;
    }  

    &[disabled] * {
        cursor: default;
        pointer-events: none;
    } 

    ${props =>
        props.checked &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.brand.main};
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.palette.border.divider};
            }
        `};
`;

export default StyledText;
