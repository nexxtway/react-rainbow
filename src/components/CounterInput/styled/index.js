import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledInput = attachThemeAttrs(styled.input)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    display: inline-block;
    padding: 0 2.5rem;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;
    
    ::-moz-focus-inner {
        border: 0;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield;

    :focus,
    :active {
        outline: 0;
        border: 2px solid ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-weight: 500;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        background-color: ${props => props.palette.background.disabled};
        border: 1px solid ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.background.disabled};
            border: 1px solid ${props => props.palette.border.disabled};
        }
    }

    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow:${props.disabled || props.readOnly ? '' : props.shadows.shadow_10};
        border: 1px solid transparent;
    `}

    ${props =>
        props.variant === 'bare' &&
        `
        background: transparent;
        border-color: transparent;
        `}

    ${props =>
        props.error &&
        `
        background-color: ${props.palette.background.main};
        border: 2px solid ${props.palette.error.main};
        background-clip: padding-box;

        :focus,
        :active {
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            outline: 0;
        }

        &[disabled] {
            &:focus,
            &:active {
                padding-left: 2.5rem;
                padding-right: 2.5rem;
            }
        }
    `}

    ${props =>
        props.isBare &&
        !props.disabled &&
        !props.readOnly &&
        `
            background-color: transparent;
            border: 0;
            padding: 0 2.5rem;
            color: ${props.palette.text.main};
            line-height: 2.5rem;
            transition: none;

            &:focus,
            &:active {
                outline: 0;
                box-shadow: none;
                padding: 0 2.5rem;
                background-color: transparent;
                border: 0;
            }
    `};

    ${props =>
        !props.disabled &&
        `
        &[readonly] {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
            background-color: transparent;
            border: 2px transparent solid;
            color: ${props.palette.text.main};
            font-weight: 400;
            cursor: text;
            box-sizing: border-box;
    
            &:focus,
            &:active {
                box-shadow: none;
                background-color: transparent;
                border: 2px transparent solid;
            }
        }
    `}
    `;

export const StyledButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
    svg {
        width: 17px !important;
        height: 17px !important;
    }
    :hover{
        background-color: ${props => props.palette.background.secondary};
    }
`;

export const ButtonContainer = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.header};
    height: 100%;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: 0.4rem;
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: 0.4rem;
    `}
    ${props =>
        props.error &&
        `
        fill: ${props.palette.error.main};
        color: ${props.palette.error.main};
    `}
`;
