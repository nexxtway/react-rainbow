import styled from 'styled-components';
import { BORDER_RADIUS_4 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLi = attachThemeAttrs(styled.li)`
    list-style: none;
    box-sizing: border-box;
    border-radius: ${BORDER_RADIUS_4};
    margin-bottom: ${MARGIN_XX_SMALL};

    ${props => props.disabled && 'pointer-events: none;'};

    ${props =>
        props.isExpanded &&
        `
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.28);
    `} 
`;

export default StyledLi;
