import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_XX_SMALL } from '../../../styles/paddings';

const StyledDescription = attachThemeAttrs(styled.p)`
    margin: 0;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 300;
    color: ${props => props.palette.text.label};
    padding: ${PADDING_XX_SMALL} 0 0 0;
`;

export default StyledDescription;
