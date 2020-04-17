import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../../styles/fontSizes';

const StyledHours = attachThemeAttrs(styled.h2)`
    flex:none;
    text-align: center;
    color: ${props => props.palette.text.main};
    min-width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${FONT_SIZE_HEADING_SMALL};
`;

export default StyledHours;
