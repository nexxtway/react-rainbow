import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderLabel = attachThemeAttrs(styled.span)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.25;
    color: ${props => props.palette.text.header};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
`;

export default StyledHeaderLabel;
