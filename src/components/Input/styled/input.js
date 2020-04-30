import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const hasLeftIcon = props => props.icon && props.iconPosition === 'left';
const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const Input = attachThemeAttrs(styled.input)`
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    display: inline-block;
    padding: 0 1rem;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    :focus,
    :active {
        outline: 0;
        padding: 0 0.9375rem;
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

        :focus,
        :active {
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            padding: 0 1rem;
            outline: 0;
        }

        &[disabled] {
            &:focus,
            &:active {
                padding: 0 1rem;

                ${hasLeftIcon(props) &&
                    `
                    padding-left: 2.35rem;
                    padding-right: 1rem;
                `}
                ${hasRightIcon(props) &&
                    `
                    padding-left: 1rem;
                    padding-right: 2.35rem
                `}
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
            padding: 0 0.75rem;
            color: ${props.palette.text.main};
            line-height: 2.5rem;
            transition: none;

            &:focus,
            &:active {
                outline: 0;
                box-shadow: none;
                padding: 0 0.75rem;
                background-color: transparent;
                border: 0;
            }
        `};
    ${props => props.isCentered && 'text-align: center;'};
    ${props =>
        hasLeftIcon(props) &&
        `
        padding-left: 2.35rem;
        padding-right: 1rem;

        &:focus,
        &:active {
            padding-left: ${props.isBare || props.error ? '2.35rem' : '2.2875rem'};
            ${props.isBare && 'padding-right: 1rem'}
        }

        &[disabled] {
            padding-left: 2.35rem;
            padding-right: 1rem;
        }
    `};
    ${props =>
        hasRightIcon(props) &&
        `
        padding-left: 1rem;
        padding-right: 2.35rem;

        &:focus,
        &:active {
            padding-right: ${props.isBare ? '2.35rem' : '2.2875rem'};
            ${props.isBare ? 'padding-left: 1rem' : ''}
        }

        &[disabled] {
            padding-left: 1rem;
            padding-right: 2.35rem;
        }
    `};

    &[type='datetime']:focus,
    &[type='datetime']:active,
    &[type='date']:focus,
    &[type='date']:active,
    &[type='datetime-local']:focus,
    &[type='datetime-local']:active,
    &[type='time']:focus,
    &[type='time']:active,
    &[type='month']:focus,
    &[type='month']:active,
    &[type='week']:focus,
    &[type='week']:active {
        line-height: 2.5rem;
    }

    @supports (-webkit-overflow-scrolling: touch) {
        &[type='date'],
        &[type='datetime-local'],
        &[type='time'],
        &[type='week'],
        &[type='month'] {
            appearance: textfield;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                display: block;
                right: 1rem;
                bottom: 45%;
                pointer-events: none;
                width: 0.45rem;
                height: 0.45rem;
                border-style: solid;
                border-width: 0.15em 0.15em 0 0;
                transform: rotate(135deg);
                vertical-align: top;
                color: ${props => props.palette.text.main};
                box-sizing: border-box;
            }

            &[disabled]::after {
                color: ${props => props.palette.text.disabled};
                box-sizing: border-box;
            }
        }
    }
`;

export default Input;
