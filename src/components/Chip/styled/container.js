import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_SMALL } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_2, COLOR_GRAY_4, COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledContainer = styled.span`
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

    button {
        margin-right: -0.6rem;
        margin-left: ${MARGIN_XX_SMALL};
        fill: ${COLOR_GRAY_4};
        flex-shrink: 0;
    }

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
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_BRAND};

            .rainbow-chip_button-container {
                fill: ${COLOR_BRAND};
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_WHITE};

            .rainbow-chip_button-container {
                fill: ${COLOR_WHITE};
            }
        `};
`;

export default StyledContainer;
