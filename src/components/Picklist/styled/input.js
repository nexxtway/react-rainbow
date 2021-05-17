import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledInput from '../../Input/styled/input';
import { COLOR_WHITE, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten, darken } from '../../../styles/helpers/color';

const PickerInput = attachThemeAttrs(styled(StyledInput)).attrs(props => {
    if (props.palette.isDark) {
        return {
            inverse: {
                text: COLOR_DARK_1,
                active: lighten(COLOR_DARK_1, 0.9),
                border: lighten(COLOR_DARK_1, 0.9),
                disabled: lighten(COLOR_DARK_1, 0.7),
            },
        };
    }
    return {
        inverse: {
            text: COLOR_WHITE,
            active: darken(COLOR_WHITE, 0.7),
            border: darken(COLOR_WHITE, 0.7),
            disabled: darken(COLOR_WHITE, 0.5),
        },
    };
})`
    padding-right: 2.35rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
        cursor: pointer;
    }

    :focus,
    :active {
        padding-right: 2.35rem;
    }

    &[disabled] {
        cursor: not-allowed;
    }

    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow: ${props.shadows.shadow_10};
        border: 1px solid transparent;
        ${props.error &&
            `
            border: 2px solid ${props.palette.error.main};
        `}
        ${props.readOnly &&
            `
            box-shadow: none;
        `}
    `}
    ${props =>
        props.variant === 'bare' &&
        `
        :hover {
            box-shadow: ${props.shadows.shadow_10};
            background-color: ${props.palette.background.main};
        }
    `}
    ${props =>
        props.variant === 'inverse' &&
        `
        background-color: transparent;
        border: 1px solid transparent;
        color: ${props.inverse.text};
        box-shadow: none;

        &:hover,
        &:focus,
        &:active {
            color: ${props.inverse.text};
            background-color: ${props.inverse.active};
            border: 1px solid ${props.inverse.border};
            box-shadow: none;
        }
    
        &:focus {
            outline: none;
            background-color: ${props.inverse.active};
            border: 1px solid ${props.inverse.border};
            box-shadow: none;
        }
    
        &[disabled] {
            background-color: transparent;
            color: ${props.inverse.disabled};
            border: 1px solid transparent;
            box-shadow: none;

            &:focus,
            &:active {
                outline: none;
                background-color: transparent;
                border: 1px solid transparent;
                box-shadow: none;
            }
        }
    `}
    ${props =>
        props.isReadOnly &&
        !props.disabled &&
        `
        box-shadow: none;
        background-color: transparent;
        border: 2px solid transparent;
        user-select: none;
        pointer-events: none;
        padding-left: 0;
        padding-right: 0;
        outline: 0;

        ${props.icon &&
            `
            border: 1px solid transparent;
            padding-left: 2.35rem;
        `};        

        &::-ms-expand {
            display: none;
        }

        :focus,
        :active {
            padding-left: 0;
            padding-right: 0;
            outline: 0;
            box-shadow: none;
            border-color: transparent;
            background-color: transparent;

            ${props.icon &&
                `
                border: 1px solid transparent;
                padding-left: 2.35rem;
            `}
        }
    `}
`;

export default PickerInput;
