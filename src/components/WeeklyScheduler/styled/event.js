import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledEvent = attachThemeAttrs(styled.div)`
    text-align: left;
    border: 1px solid ${props => props.palette.border.divider};
    border-left: 3px solid ${props => props.palette.brand.main};
    color: ${props => props.palette.text.main};
    background-color: ${props => props.palette.background.secondary};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    padding: 0;
    padding-left: 2px;
`;

export default StyledEvent;
