import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledDatetime = attachThemeAttrs(styled.p)`
    color: ${props => props.palette.text.header};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin: 0;
    padding: 0;
    margin-left: ${MARGIN_SMALL};
    box-sizing: border-box;
`;

export default StyledDatetime;
