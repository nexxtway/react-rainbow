import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { COLOR_ERROR } from '../../../styles/colors';

const StyledError = styled.div`
    text-align: center;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    color: ${COLOR_ERROR};
`;

export default StyledError;
