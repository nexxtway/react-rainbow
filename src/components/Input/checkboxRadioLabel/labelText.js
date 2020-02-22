import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const LabelText = attachThemeAttrs(styled.span)`
    display: inline;
    vertical-align: middle;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.65rem;
    ${props => props.disabled && `color: ${props.palette.text.disabled};`};
`;

export default LabelText;
