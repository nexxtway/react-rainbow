import styled from 'styled-components';
import { COLOR_GRAY_3, COLOR_BRAND, COLOR_ERROR } from '../../../styles/colors';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLabel = styled.span`
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    color: ${COLOR_GRAY_3};
    margin-top: ${MARGIN_XX_SMALL};
    position: absolute;
    display: inline-table;
    top: 100%;
    ${props =>
        props.stepState === 'Active' &&
        `
            color: ${COLOR_BRAND};
        `};
    ${props =>
        props.stepState === 'Error' &&
        `
            color: ${COLOR_ERROR};
        `};
`;

export default StyledLabel;
