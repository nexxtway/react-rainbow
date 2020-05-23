/* stylelint-disable max-line-length */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const sizeMap = { large: '3.1rem', medium: '2.6rem', small: '1.81rem', 'x-small': '1.31rem' };
const StyledMarker = attachThemeAttrs(styled.span)`
    position: absolute;
    background-color: ${props => props.palette.background.main};
    opacity: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: ${props => sizeMap[props.size] || sizeMap.medium};
    border-color: ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    box-shadow: ${props => props.shadows.shadow_1};
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);
    ${props =>
        props.variant === 'inverse' &&
        `
        background-color: ${props.palette.brand.main};
        border: solid 1px ${props.palette.brand.main};
        box-shadow: 0 0 4px 0 ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.palette.brand.main};
            border-color: ${props.palette.brand.dark};
        `};
`;

export default StyledMarker;
