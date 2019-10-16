import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { COLOR_ERROR_ACTIVE } from '../../../styles/colors';

const StyledError = styled.div`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: center;
    color: ${COLOR_ERROR_ACTIVE};
`;

export default StyledError;
