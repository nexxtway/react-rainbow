import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_BRAND } from '../../../styles/colors';

const StyledArrowIcon = styled.svg`
    transform: rotate(0deg);
    fill: ${COLOR_BRAND};
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
