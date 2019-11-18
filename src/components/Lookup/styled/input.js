import styled from 'styled-components';
import Input from '../../Input/inputBase/styled/input';

const StyledInput = styled(Input)`
    ${props =>
        props.isLoading &&
        `
        padding-right: 5rem;

        :focus,
        :active {
            padding-right: 5rem;
        }
    `}
`;

export default StyledInput;
