import styled from 'styled-components';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledWeek = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_LARGE};
    color: ${props => props.palette.brand.main};
    text-transform: capitalize;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledWeek;
