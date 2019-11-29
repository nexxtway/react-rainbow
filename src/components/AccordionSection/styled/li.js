import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const StyledLi = styled.li`
    border-top: 1px solid ${COLOR_GRAY_2};
    list-style: none;
    box-sizing: border-box;

    &:first-child {
        border-top: 0;
    }

    ${props => props.disabled && 'pointer-events: none;'};
`;

export default StyledLi;
