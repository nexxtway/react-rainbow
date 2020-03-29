import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderDays = attachThemeAttrs(styled.th)`
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    height: 40px;
    padding: 0;
    box-sizing: border-box;
    border: solid 1px ${props => props.palette.border.divider};
`;

export default StyledHeaderDays;
