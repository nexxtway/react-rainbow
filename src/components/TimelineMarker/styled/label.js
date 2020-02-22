import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledLabel = attachThemeAttrs(styled.h1)`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_HEADING_SMALL};
    box-sizing: border-box;
`;

export default StyledLabel;
