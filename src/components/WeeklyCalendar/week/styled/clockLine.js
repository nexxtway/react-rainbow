import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../../styles/fontSizes';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledClockLine = attachThemeAttrs(styled.div)`
    position: absolute;
    top: ${props => props.clockHeight}px;
    width: 100%;
    z-index: 504;

    > span {
        position: absolute;
        top: -8px;
        width: 57px;
        text-align: right;
        color: ${props => props.palette.error.main};
        font-size: ${FONT_SIZE_TEXT_SMALL};
    }
`;

export default StyledClockLine;
