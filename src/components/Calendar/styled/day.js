import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDay = attachThemeAttrs(styled.td)`
    text-align: center;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    border-radius: 100%;
    width: 38px;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledDay;
