/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';

const StyledMarker = styled.span`
    position: absolute;
    background: ${COLOR_WHITE};
    opacity: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 2.6rem;
    margin-top: -0.05rem;
    border-color: white;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);
    ${props =>
        props.variant === 'inverse' &&
        `
            box-shadow: 0 0 4px 0 #029bd3;
            background-color: #029bd3;
            border: solid 1px #009acf;
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border-color: #01aae5;
            box-shadow: 0 0 3px 0 rgba(1, 38, 96, 0.4); 
        `};
`;

export default StyledMarker;
