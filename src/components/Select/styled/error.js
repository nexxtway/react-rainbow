import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import getTheme from '../../../styles/helpers/getTheme';

const StyledError = styled.div.attrs(props => {
    const errorMainColor = getTheme(props).palette.error.main;
    return { errorMainColor };
})`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: center;
    color: ${props => props.error};
`;

export default StyledError;
