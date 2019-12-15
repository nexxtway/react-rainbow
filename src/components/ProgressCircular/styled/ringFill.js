import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledRingFill = styled.circle.attrs(props => {
    const theme = getTheme(props);
    const { brand, success, error, warning } = theme.palette;
    const { main: brandMainColor } = brand;
    const { main: successMainColor } = success;
    const { main: errorMainColor } = error;
    const { main: warningMainColor } = warning;

    return {
        brandMainColor,
        successMainColor,
        errorMainColor,
        warningMainColor,
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
            stroke: ${props.warningMainColor};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            stroke: ${props.errorMainColor};
        `};
`;

export default StyledRingFill;
