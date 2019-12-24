import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

const HelpText = styled.div.attrs(props => {
    const textPrimary = getTheme(props).palette.text.primary;
    return { textPrimary };
})`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: ${getAlignSelf};
    color: ${props => props.textPrimary};
`;

export default HelpText;
