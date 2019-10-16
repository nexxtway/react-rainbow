import styled from 'styled-components';
import { COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';

const StyledLabel = styled.span`
    font-family: 'Lato Regular', Arial, sans-serif;
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    letter-spacing: -0.2px;
    text-align: center;
    color: ${COLOR_GRAY_3};
`;

export default StyledLabel;
