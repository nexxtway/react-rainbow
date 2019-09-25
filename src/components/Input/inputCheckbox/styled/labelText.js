import styled from 'styled-components';
import { COLOR_DARK_1, COLOR_GRAY_3 } from '../../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../../styles/fontSizes';

const LabelText = styled.span`
    display: inline;
    vertical-align: middle;
    color: ${COLOR_DARK_1};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.65rem;
    ${props => props.disabled && `color: ${COLOR_GRAY_3};`};
`;

export default LabelText;
