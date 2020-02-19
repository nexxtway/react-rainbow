import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderDays = attachThemeAttrs(styled.th)`
    text-align: center;
    color: ${props => props.palette.text.header};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 40px;
    height: 40px;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledHeaderDays;
