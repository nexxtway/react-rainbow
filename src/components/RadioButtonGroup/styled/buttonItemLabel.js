import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { PADDING_LARGE } from '../../../styles/paddings';

const StyledButtonItemLabel = attachThemeAttrs(styled.label).attrs(props => {
    const { getContrastText, brand } = props.palette;
    const brandMainContrastText = getContrastText(brand.main);

    return {
        brandMainContrastText,
    };
})`
    display: inline-flex;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.palette.text.label};
    padding: 0 ${PADDING_LARGE};
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
