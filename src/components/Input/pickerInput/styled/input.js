import styled from 'styled-components';
import StyledInput from '../../styled/input';

const PickerInput = styled(StyledInput)`
    :hover {
        cursor: pointer;
    }

    &[disabled] {
        cursor: not-allowed;
    }
`;

export default PickerInput;
