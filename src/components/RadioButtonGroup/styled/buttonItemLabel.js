import styled from 'styled-components';
import {
    COLOR_GRAY_4,
    COLOR_GRAY_3,
    COLOR_GRAY_2,
    COLOR_DARK_1,
    COLOR_WHITE,
} from '../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { PADDING_LARGE } from '../../../styles/paddings';

const StyledButtonItemLabel = styled.label`
    display: inline-flex;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${COLOR_GRAY_3};
    padding: 0 ${PADDING_LARGE};
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }

    ${props =>
        props.isChecked &&
        `
            color: ${COLOR_DARK_1};
        `};
    ${props =>
        props.disabled &&
        `   
            background-color: transparent;
            border-color: ${COLOR_GRAY_4};
            color: ${COLOR_GRAY_2};
            color: $color-gray-2;

            :hover {
                cursor: not-allowed;
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        props.isChecked &&
        `
            color: ${COLOR_WHITE};
        `};
    ${props =>
        props.variant === 'inverse' &&
        props.isChecked &&
        `
            color: ${COLOR_WHITE};
        `};
`;

export default StyledButtonItemLabel;
