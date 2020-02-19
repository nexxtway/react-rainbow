import styled from 'styled-components';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledFooter = attachThemeAttrs(styled.footer)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: normal;
    color: inherit;
    text-align: center;
    border-top: 0.0625rem solid ${props => props.palette.border.divider};
    padding: ${PADDING_SMALL} ${PADDING_MEDIUM};
`;

export default StyledFooter;
