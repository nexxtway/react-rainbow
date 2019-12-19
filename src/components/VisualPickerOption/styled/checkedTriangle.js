import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledCheckedTriangle = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
    };
})`
    position: absolute;
    top: -1px;
    right: -1px;
    border: 1.5rem solid transparent;
    border-radius: 0 20px 0 0;
    border-right-color: ${props => props.brandMainColor};
    border-top-color: ${props => props.brandMainColor};
    margin: 0;
    padding: 0;
`;

export default StyledCheckedTriangle;
