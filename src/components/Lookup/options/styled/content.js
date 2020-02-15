import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledContent = attachThemeAttrs(styled.span)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 500;
    color: ${props => props.palette.text.main};
    display: flex;
    flex-direction: column;
`;

export default StyledContent;
