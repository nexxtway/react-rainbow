import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { COLOR_DARK_1 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

const HelpText = styled.div`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: ${getAlignSelf};
    color: ${COLOR_DARK_1};
`;

export default HelpText;
