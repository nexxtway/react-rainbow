import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledFooterTitle = attachThemeAttrs(styled.h1)`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    font-weight: 600;
    color: ${props => props.palette.text.main};
    line-height: 1.5;
    margin: 0;
    padding: 0;
`;

export default StyledFooterTitle;
