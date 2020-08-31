import styled from 'styled-components';
import Input from '../../../Input';
import { CssInput } from '../styled';

const StyledNumberInput = styled(Input)`
    margin-left: 5px;

    input {
        ${CssInput}
        padding: 0 0.7rem;

        :focus,
        :active {
            padding: 0 0.65625rem;
        }
    }

    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    input::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }
`;

export default StyledNumberInput;
