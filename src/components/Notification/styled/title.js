import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledTitle = attachThemeAttrs(styled.h1)`
    margin: 0;
    font-weight: inherit;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${props => props.palette.text.main};
    line-height: 1;
    padding: 0 ${PADDING_MEDIUM} 0 0;
`;

export default StyledTitle;
