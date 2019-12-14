import styled from 'styled-components';
import { COLOR_YELLOW_1 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledRingFill = styled.circle.attrs(props => {
    const theme = getTheme(props);
    const { brand, success, error } = theme.palette;
    const { main: brandMainColor } = brand;
    const { main: successMainColor } = success;
    const { main: errorMainColor } = error;

    return {
        brandMainColor,
        successMainColor,
        errorMainColor,
    };
})`
    stroke: ${props => props.brandMainColor};
    transition: all 0.4s ease-out 0s;
    ${props =>
        props.variant === 'success' &&
        `
            stroke: ${props.successMainColor};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            stroke: ${COLOR_YELLOW_1};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            stroke: ${props.errorMainColor};
        `};
`;

export default StyledRingFill;
