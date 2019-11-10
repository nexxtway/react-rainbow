import styled from 'styled-components';
import { COLOR_ERROR_ACTIVE } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../styles/margins';

const StyledError = styled.div`
    color: ${COLOR_ERROR_ACTIVE};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    align-self: center;
`;

export default StyledError;
