import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';

const StyledValue = attachThemeAttrs(styled.span)`
    margin: 0 0.5rem;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    width: ${props => props.width}ch;
`;

export default StyledValue;
