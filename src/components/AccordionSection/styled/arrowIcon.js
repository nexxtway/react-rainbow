import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledArrowIcon = attachThemeAttrs(styled.svg)`
    transform: rotate(0deg);
    fill: ${props => props.palette.text.main};
    transition: transform 0.15s linear;
    vertical-align: middle;
    width: 1rem;

    :not(:root) {
        overflow: hidden;
    }

    ${props =>
        props.isExpanded &&
        `
            transform: rotate(-180deg);
            transition: transform 0.15s linear;
        `};
    ${props => props.disabled && `fill: ${props.palette.text.disabled};`};
`;

export default StyledArrowIcon;
