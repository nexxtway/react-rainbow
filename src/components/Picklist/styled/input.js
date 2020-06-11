import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledInput from '../../Input/styled/input';

const PickerInput = attachThemeAttrs(styled(StyledInput))`
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
        props.isReadOnly &&
        `
        box-shadow: none;
        background-color: transparent;
        border: 2px solid transparent;
        user-select: none;
        padding-left: 0;
        padding-right: 0;
        outline: 0;
        
        :hover {
            cursor: text;
        }

        
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
        }
    `}
`;

export default PickerInput;
