import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHourLine = attachThemeAttrs(styled.div)`
    position: absolute;
    top: ${props => props.hourHeight}px;
    width: 100%;
    z-index: 504;

    > span {
        position: absolute;
        top: -8px;
        width: 52px;
        text-align: right;
        color: ${props => props.palette.error.main};
        font-size: ${FONT_SIZE_TEXT_SMALL};
    }
`;

export default StyledHourLine;
