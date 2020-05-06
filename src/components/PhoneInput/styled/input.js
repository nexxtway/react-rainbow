import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const StyledInput = attachThemeAttrs(styled.input)`
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    display: inline-block;
    padding: 0 1rem;
    padding-left: 7rem;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;

    

    ${props =>
        props.isFocus &&
        `
        outline: 0;
        padding: 0 0.9375rem;
        padding-left: 6.9375rem;
        border: 2px solid ${props.palette.brand.main};
        background-color: ${props.palette.background.main};
        box-shadow: ${props.shadows.brand};
    `};

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-weight: 300;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        background-color: ${props => props.palette.background.disabled};
        border: 1px solid ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;
        ${props => !props.icon && 'padding: 0 1rem;'}
        
        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.background.disabled};
            border: 1px solid ${props => props.palette.border.disabled};
        }
    }

    ${props =>
        props.error &&
        `
        background-color: ${props.palette.background.main};
        border: 2px solid ${props.palette.error.main};
        background-clip: padding-box;

        ${props.isFocus &&
            `
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            padding: 0 1rem;
            outline: 0;
        `};

        &[disabled] {
            &:focus,
            &:active {
                padding: 0 1rem;
                ${hasRightIcon(props) &&
                    `
                    padding-left: 1rem;
                    padding-right: 2.35rem
                `}
            }
        }
    `};

    ${props =>
        hasRightIcon(props) &&
        `
        padding-right: 2.35rem;

        &[disabled] {
            padding-right: 2.35rem;
        }
    `};

`;

export default StyledInput;
