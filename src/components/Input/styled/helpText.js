import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

const HelpText = attachThemeAttrs(styled.div)`
    font-size: ${FONT_SIZE_TEXT_SMALL};
    margin-top: ${MARGIN_X_SMALL};
    align-self: ${getAlignSelf};
    color: ${props => props.palette.text.header};
`;

export default HelpText;
