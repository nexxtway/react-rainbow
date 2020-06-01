import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledHeaderLabel = attachThemeAttrs(styled.span)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.header};
    font-weight: normal;
    text-transform: uppercase;
`;

export default StyledHeaderLabel;
