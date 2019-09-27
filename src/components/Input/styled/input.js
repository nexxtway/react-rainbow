import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_GRAY_2,
    COLOR_GRAY_1,
    COLOR_ERROR,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../styles/shadows';

const hasLeftIcon = props => props.icon && props.iconPosition === 'left';
const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const Input = styled.input`
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_3};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear;
    display: inline-block;
    padding: 0 1rem;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${COLOR_DARK_1};
    font-size: ${FONT_SIZE_TEXT_LARGE};

    [type='search']::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    :focus,
    :active {
        outline: 0;
        padding: 0 0.9375rem;
        border: 2px ${COLOR_BRAND} solid;
        background-color: ${COLOR_WHITE};
        box-shadow: ${SHADOW_OUTLINE};
    }

    ::placeholder {
        color: ${COLOR_GRAY_3};
        font-weight: 300;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        background-color: ${COLOR_GRAY_1};
        border: 1px solid ${COLOR_GRAY_2};
        color: ${COLOR_GRAY_2};
        cursor: not-allowed;
        user-select: none;
        ${props => !props.icon && 'padding: 0 1rem;'}

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${COLOR_GRAY_1};
            border: 1px ${COLOR_GRAY_2} solid;
        }
    }

    ${props =>
        props.error &&
        `
        background-color: ${COLOR_WHITE};
        border: 2px ${COLOR_ERROR} solid;
        background-clip: padding-box;

        :focus {
            background-color: ${COLOR_WHITE};
            border: 2px ${COLOR_ERROR} solid;
            box-shadow: ${SHADOW_ERROR};
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
            color: ${COLOR_DARK_1};
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
            padding-right: 2.2875rem;
            padding-right: ${props.isBare ? '2.35rem' : '2.2875rem'};
            ${props.isBare && 'padding-left: 1rem'}
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
                color: ${COLOR_DARK_1};
            }

            &[disabled]::after {
                color: ${COLOR_GRAY_2};
            }
        }
    }
`;

export default Input;
