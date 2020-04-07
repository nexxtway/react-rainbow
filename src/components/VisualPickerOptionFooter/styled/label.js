import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledLabel = attachThemeAttrs(styled.h1)`
    margin: 0;
    padding: 0;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${props => props.palette.text.main};
    text-align: center;
    font-weight: 300;
`;

export default StyledLabel;
