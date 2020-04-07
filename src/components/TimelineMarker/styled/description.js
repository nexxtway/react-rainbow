import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_X_SMALL } from '../../../styles/paddings';

const StyledDescription = attachThemeAttrs(styled.p)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.label};
    padding: ${PADDING_X_SMALL} 0;
    margin: 0;
    box-sizing: border-box;
`;

export default StyledDescription;
