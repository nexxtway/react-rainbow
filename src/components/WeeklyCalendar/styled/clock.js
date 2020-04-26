import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledClock = attachThemeAttrs(styled.div)`
    position: absolute;
    right: 8px;
    width: 57px;
    text-align: right;
    color: ${props => props.palette.error.main};
    font-size: ${FONT_SIZE_TEXT_SMALL};
    z-index: 504;
`;

export default StyledClock;
