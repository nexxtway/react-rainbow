import styled from 'styled-components';
import { COLOR_BRAND, COLOR_SUCCESS, COLOR_YELLOW_1, COLOR_ERROR } from '../../../styles/colors';

const StyledRingFill = styled.circle`
    stroke: ${COLOR_BRAND};
    transition: all 0.4s ease-out 0s;
    ${props =>
        props.variant === 'success' &&
        `
            stroke: ${COLOR_SUCCESS};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            stroke: ${COLOR_YELLOW_1};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            stroke: ${COLOR_ERROR};
        `};
`;

export default StyledRingFill;
