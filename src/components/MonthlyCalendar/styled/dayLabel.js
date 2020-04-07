import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayLabel = attachThemeAttrs(styled.div)`
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    font-weight: 400;
    text-align: right;
    padding: 7px 7px 0 0;
`;

export default StyledDayLabel;
