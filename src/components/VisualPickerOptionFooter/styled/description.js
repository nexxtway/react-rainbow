import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';

const StyledDescription = attachThemeAttrs(styled.h2)`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    color: ${props => props.palette.text.label};
    text-align: center;
`;

export default StyledDescription;
