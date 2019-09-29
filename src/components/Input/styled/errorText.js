import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { COLOR_ERROR } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

const ErrorText = styled.div`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: ${getAlignSelf};
    color: ${COLOR_ERROR};
`;

export default ErrorText;
