import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_SMALL } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_2, COLOR_GRAY_4, COLOR_WHITE } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledContainer = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor } = brand;
    const brandMainContrastText = getContrastText(brandMainColor);

    return {
        brandMainColor,
        brandMainContrastText,
    };
})`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    border-radius: ${BORDER_RADIUS_2};
    padding: 0 ${PADDING_SMALL};
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-property: margin, max-height, opacity, top;
    height: 2rem;
    line-height: 2rem;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    letter-spacing: 0.5;
    background-color: ${COLOR_GRAY_2};
    border: 1px solid ${COLOR_GRAY_2};
    color: ${COLOR_GRAY_4};
    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.brandMainColor};
            color: ${props.brandMainColor};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.brandMainColor};
            border: 1px solid ${props.brandMainColor};
            color: ${props.brandMainContrastText};
        `};
`;

export default StyledContainer;
