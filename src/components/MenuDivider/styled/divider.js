import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const StyledDivider = styled.li`
    border-top: solid 1px ${COLOR_GRAY_2};
    box-sizing: border-box;
    ${props =>
        props.variant === 'space' &&
        `
            margin-top: 0.5rem;
            padding-top: 0.5rem;
        `};
`;

export default StyledDivider;
