import styled from 'styled-components';
import { COLOR_GRAY_4, COLOR_GRAY_2 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { PADDING_LARGE } from '../../../styles/paddings';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButtonItemLabel = styled.label.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;

    return {
        brandMainColor,
        brandDarkColor,
        getContrastText,
    };
})`
    display: inline-flex;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.brandMainColor};
    padding: 0 ${PADDING_LARGE};
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }

    ${props => {
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.isChecked &&
            `
                color: ${brandDarkContrastText};
            `
        );
    }};
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
`;

export default StyledButtonItemLabel;
