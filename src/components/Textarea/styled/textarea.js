import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_ERROR,
} from '../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../styles/shadows';

const StyledTextarea = styled.textarea`
    border-radius: ${BORDER_RADIUS_1};
    background-color: ${COLOR_WHITE};
    border: solid 1px ${COLOR_GRAY_3};
    transition: all 0.1s linear;
    width: 100%;
    padding: 0.625rem 1rem;
    resize: none;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.57;
    color: ${COLOR_DARK_1};
    box-sizing: border-box;
    margin: 0;
    overflow: auto;

    :focus,
    :active {
        outline: 0;
        background-color: ${COLOR_WHITE};
        border: solid 2px ${COLOR_BRAND};
        box-shadow: ${SHADOW_OUTLINE};
        padding: 0.5625rem 0.9375rem;
    }

    ::placeholder {
        color: ${COLOR_GRAY_3};
        font-weight: 300;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        cursor: not-allowed;
        user-select: none;
        background-color: ${COLOR_GRAY_1};
        border: solid 1px ${COLOR_GRAY_2};
        color: ${COLOR_GRAY_2};

        &:focus,
        &:active {
            box-shadow: none;
            padding: 0.625rem 1rem;
        }

        &::placeholder {
            color: ${COLOR_GRAY_2};
        }
    }

    &[readonly] {
        border: none;
        border-radius: 0;
        background-color: transparent;
        padding: 0;

        &:focus,
        &:active {
            box-shadow: none;
            border: none;
        }
    }

    ${props =>
        props.error &&
        `
            background-color: ${COLOR_WHITE};
            border: solid 2px ${COLOR_ERROR};
            background-clip: padding-box;

            &:focus,
            &:active {
                padding: 0.625rem 1rem;
                box-shadow: ${SHADOW_ERROR};
                border: solid 2px ${COLOR_ERROR};
            }
        `};
`;

export default StyledTextarea;
