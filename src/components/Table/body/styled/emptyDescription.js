import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../../styles/margins';

const StyledEmptyDescription = styled.h2`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: center;
    color: ${COLOR_GRAY_4};
    margin: 0;
    margin-top: ${MARGIN_X_SMALL};
    padding: 0;
    font-weight: inherit;
`;

export default StyledEmptyDescription;
