import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';
import { MARGIN_LARGE } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledWeek = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    color: ${props => props.palette.brand.main};
    text-transform: capitalize;
    font-weight: 500;
    margin: 0;
    padding: 0;
    margin-left: ${MARGIN_LARGE};
    box-sizing: border-box;
`;

export default StyledWeek;
