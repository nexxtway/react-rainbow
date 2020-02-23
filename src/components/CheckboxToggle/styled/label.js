import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledLabel = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-left: ${MARGIN_SMALL};
`;

export default StyledLabel;
