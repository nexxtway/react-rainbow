import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import StyledInput from '../../Input/styled/input';

const PickerInput = styled(StyledInput)`
    padding-right: 2.35rem;
    font-weight: 400;

    :hover {
        cursor: pointer;
    }

    :focus,
    :active {
        padding-right: 2.35rem;
    }

    &::placeholder {
        color: ${COLOR_GRAY_4};
        font-weight: 400;
    }

    &[disabled] {
        cursor: not-allowed;
    }

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
