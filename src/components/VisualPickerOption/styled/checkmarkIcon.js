import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledCheckmarkIcon = styled.svg.attrs(props => {
    const theme = getTheme(props);
    const { brand, getContrastText } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
        getContrastText,
    };
})`
    position: absolute;
    top: 8px;
    right: 8px;
    fill: ${props => props.getContrastText(props.brandMainColor)};
`;

export default StyledCheckmarkIcon;
