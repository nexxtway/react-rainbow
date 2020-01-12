import styled from 'styled-components';
import {
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_1,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledSelect = styled.select.attrs(props => {
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
    box-sizing: border-box;

    &::-ms-expand {
        display: none;
    }

    &:focus,
    &:active,
    &:visited {
        outline: 0;
        padding-left: 0.9375rem;
        padding-right: 1.7375rem;
        border: 0.125rem ${props => props.brandMainColor} solid;
        box-shadow: ${props => props.brandShadow};
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
            border: 0.125rem ${props.errorMainColor} solid;
            background-clip: padding-box;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;

            &:focus, &:active {
                box-shadow: ${props.errorShadow};
                border: 0.125rem ${props.errorMainColor} solid;
            }
        `};
`;

export default StyledSelect;
