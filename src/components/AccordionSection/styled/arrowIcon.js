import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledArrowIcon = styled.svg.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
    };
})`
    transform: rotate(0deg);
    fill: ${props => props.brandMainColor};
    transition: transform 0.15s linear;
    vertical-align: middle;

    :not(:root) {
        overflow: hidden;
    }

    ${props =>
        props.isExpanded &&
        `
            transform: rotate(-180deg);
            transition: transform 0.15s linear;
        `};
    ${props => props.disabled && `fill: ${COLOR_GRAY_2};`};
`;

export default StyledArrowIcon;
