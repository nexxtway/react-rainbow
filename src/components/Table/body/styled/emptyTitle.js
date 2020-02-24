import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';

const StyledEmptyTitle = attachThemeAttrs(styled.h1)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 900;
    text-align: center;
    color: ${props => props.palette.text.main};
    margin: 0;
    padding: 0;
`;

export default StyledEmptyTitle;
