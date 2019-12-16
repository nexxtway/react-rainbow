import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledIconContainer = styled.span.attrs(props => {
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
    width: 24;
    height: 20;
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    color: ${props => props.brandMainColor};
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${props.brandMainColor};
        `};
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

export default StyledIconContainer;
