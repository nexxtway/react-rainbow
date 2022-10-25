import styled from 'styled-components';
import Input from '../../Input/inputBase/styled/input';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';

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

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export default StyledInput;
