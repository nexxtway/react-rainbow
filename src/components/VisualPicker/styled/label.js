import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledLabel = styled.legend`
    border: 0;
    padding: 0;
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin: 0 auto 0.25rem auto;
    text-align: center;
`;

export default StyledLabel;
