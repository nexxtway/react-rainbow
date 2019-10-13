import styled from 'styled-components';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_YELLOW_1,
    COLOR_ERROR,
    COLOR_GRAY_2,
} from '../../../styles/colors';

const StyledPercentValue = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    color: ${COLOR_BRAND};
    margin: 0;
    padding: 0;
    ${props =>
        props.variant === 'success' &&
        `
            color: ${COLOR_SUCCESS};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${COLOR_YELLOW_1};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${COLOR_ERROR};
        `};
`;

export default StyledPercentValue;
