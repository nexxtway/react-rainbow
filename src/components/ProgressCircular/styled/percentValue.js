import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledPercentValue = styled.h1.attrs(props => {
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
            color: ${props.warningMainColor};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.errorMainColor};
        `};
`;

export default StyledPercentValue;
