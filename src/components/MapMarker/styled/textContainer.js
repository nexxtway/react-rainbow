import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';

const StyledTextContainer = attachThemeAttrs(styled.span)`
    flex: 1;
    min-width: 0;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    color: ${props => props.palette.text.label};
`;

export default StyledTextContainer;
