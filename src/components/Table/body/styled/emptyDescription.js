import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../../styles/margins';

const StyledEmptyDescription = attachThemeAttrs(styled.h2)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: center;
    color: ${props => props.palette.text.label};
    margin: 0;
    margin-top: ${MARGIN_X_SMALL};
    padding: 0;
    font-weight: inherit;
`;

export default StyledEmptyDescription;
