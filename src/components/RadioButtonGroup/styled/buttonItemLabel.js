import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_TEXT_MEDIUM,
    FONT_SIZE_TEXT_SMALL,
    FONT_SIZE_TEXT_X_SMALL,
} from '../../../styles/fontSizes';
import {
    PADDING_X_LARGE,
    PADDING_LARGE,
    PADDING_SMALL,
    PADDING_X_SMALL,
} from '../../../styles/paddings';
import { COLOR_GRAY_4 } from '../../../styles/colors';

const fontSizeMap = {
    large: FONT_SIZE_TEXT_LARGE,
    medium: FONT_SIZE_TEXT_MEDIUM,
    small: FONT_SIZE_TEXT_SMALL,
    'x-small': FONT_SIZE_TEXT_X_SMALL,
};
const paddingMap = {
    large: PADDING_X_LARGE,
    medium: PADDING_LARGE,
    small: PADDING_SMALL,
    'x-small': PADDING_X_SMALL,
};
const StyledButtonItemLabel = attachThemeAttrs(styled.label).attrs(props => {
    const { getContrastText, brand, text } = props.palette;
    const brandMainContrastText = getContrastText(brand.main);
    const inverseLabel = props.palette.isDark ? COLOR_GRAY_4 : text.label;

    return {
        brandMainContrastText,
        inverseLabel,
    };
})`
    display: inline-flex;
    font-size: ${props => fontSizeMap[props.size] || fontSizeMap.medium};
    color: ${props => props.inverseLabel};
    padding: 0 ${props => paddingMap[props.size] || paddingMap.medium};
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
    ${props =>
        props.isChecked &&
        `
            color: ${props.palette.text.main};
        `};
    ${props =>
        props.disabled &&
        `   
            background-color: transparent;
            border-color: ${props.palette.border.main};
            color: ${props.palette.text.disabled};

            :hover {
                cursor: not-allowed;
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        props.isChecked &&
        `
            color: ${props.brandMainContrastText};
        `};
    ${props =>
        props.variant === 'inverse' &&
        props.isChecked &&
        `
            color: ${props.brandMainContrastText};
        `};
`;

export default StyledButtonItemLabel;
