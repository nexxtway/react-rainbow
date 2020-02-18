import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledMonth = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    color: ${props => props.palette.text.main};
    text-transform: capitalize;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledMonth;
