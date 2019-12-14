import styled from 'styled-components';
import { COLOR_YELLOW_1 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledPercentValue = styled.h1.attrs(props => {
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
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.brandMainColor};
    margin: 0;
    padding: 0;
    ${props =>
        props.variant === 'success' &&
        `
            color: ${props.successMainColor};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${COLOR_YELLOW_1};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.errorMainColor};
        `};
`;

export default StyledPercentValue;
