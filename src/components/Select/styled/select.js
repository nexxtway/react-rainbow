import styled from 'styled-components';
import {
    COLOR_BRAND,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_1,
    COLOR_ERROR,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../styles/shadows';

const StyledSelect = styled.select`
    font: inherit;
    margin: 0;
    text-transform: none;
    width: 100%;
    appearance: none;
    line-height: 2rem;
    height: 2.5rem;
    border: 1px solid ${COLOR_GRAY_3};
    border-radius: ${BORDER_RADIUS_2};
    padding: 0 1.8rem 0 ${PADDING_MEDIUM};
    background-color: ${COLOR_WHITE};
    color: ${COLOR_DARK_1};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    transition: all 0.1s linear;

    &::-ms-expand {
        display: none;
    }

    &:focus,
    &:active,
    &:visited {
        outline: 0;
        padding-left: 0.9375rem;
        padding-right: 1.7375rem;
        border: 0.125rem ${COLOR_BRAND} solid;
        box-shadow: ${SHADOW_OUTLINE};
        line-height: 2rem;
    }

    &[disabled] {
        user-select: none;
        cursor: not-allowed;
        background-color: ${COLOR_GRAY_1};
        border-color: ${COLOR_GRAY_2};
        color: ${COLOR_GRAY_2};

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${COLOR_GRAY_1};
            border: 0.0626rem ${COLOR_GRAY_2} solid;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;
        }
    }

    ${props =>
        props.error &&
        `
            background-color: ${COLOR_WHITE};
            border: 0.125rem ${COLOR_ERROR} solid;
            background-clip: padding-box;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;

            &:focus, &:active {
                box-shadow: ${SHADOW_ERROR};
                border: 0.125rem ${COLOR_ERROR} solid;
            }
        `};
`;

export default StyledSelect;
