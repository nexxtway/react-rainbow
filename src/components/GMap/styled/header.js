import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledHeader = attachThemeAttrs(styled.h2)`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    font-weight: 900;
    color: ${props => props.palette.text.main};
    margin: 0;
    padding: 0;
`;

export default StyledHeader;
