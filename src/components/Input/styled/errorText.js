import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

const ErrorText = styled.div.attrs(props => {
    const errorMainColor = getTheme(props).palette.error.main;
    return { errorMainColor };
})`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: ${getAlignSelf};
    color: ${props => props.errorMainColor};
`;

export default ErrorText;
