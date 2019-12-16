import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledBar = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { brand, success } = theme.palette;
    const { main: brandMainColor } = brand;
    const { main: successMainColor } = success;

    return {
        brandMainColor,
        successMainColor,
    };
})`
    display: block;
    background: ${props => props.brandMainColor};
    height: 100%;
    border-radius: 1rem;
    ${props =>
        props.variant === 'success' &&
        `
            background: ${props.successMainColor};
        `};
`;

export default StyledBar;
