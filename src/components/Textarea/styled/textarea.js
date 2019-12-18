import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
} from '../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledTextarea = styled.textarea.attrs(props => {
    const { brand, error } = getTheme(props).palette;
    const brandMainColor = brand.main;
    const errorMainColor = error.main;

    return {
        brandMainColor,
        errorMainColor,
        brandShadow: `0 0 2px ${brandMainColor}`,
        errorShadow: `0 0 2px ${errorMainColor}`,
    };
})`
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
        border: solid 2px ${propps => propps.brandMainColor};
        box-shadow: ${props => props.brandShadow};
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
            border: solid 2px ${props.errorMainColor};
            background-clip: padding-box;

            &:focus,
            &:active {
                padding: 0.625rem 1rem;
                box-shadow: ${props.errorShadow};
                border: solid 2px ${props.errorMainColor};
            }
        `};
`;

export default StyledTextarea;
