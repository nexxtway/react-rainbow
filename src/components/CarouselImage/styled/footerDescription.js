import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';

const StyledFooterDescription = attachThemeAttrs(styled.p)`
    font-size: ${FONT_SIZE_TEXT_SMALL};
    font-weight: 400;
    color: ${props => props.palette.text.main};
    margin: 0;
    padding: 0;
`;

export default StyledFooterDescription;
