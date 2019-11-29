import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_BRAND } from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledDayButton = styled.button`
    font: inherit;
    border: none;
    outline: none;
    transition: all 0.2s ease;
    background-color: transparent;
    border-radius: 48px;
    line-height: 38px;
    height: 38px;
    width: 38px;
    margin: 6px auto;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    overflow: visible;
    text-transform: none;
    appearance: button;

    &:hover {
        transition: all 0.2s ease;
        background-color: ${COLOR_GRAY_2};
    }

    &:active {
        transform: scale(0.85);
        transition: all 0.2s ease;
    }

    &:focus,
    &:active {
        box-shadow: ${SHADOW_OUTLINE};
    }

    @media (max-width: 600px) {
        margin: 3px auto;
    }

    ${props =>
        props.isSelected &&
        `
            color: white;
            background-color: ${COLOR_BRAND};
            text-align: center;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            font-weight: 600;
            border-radius: 48px;
            line-height: 36px;
            height: 36px;
            width: 36px;
            margin: 5px auto;
            padding: 0;
            border: none;
            outline: none;
        
            &:active {
                transform: scale(0.85);
                transition: all 0.2s ease;
            }
        
            &:hover {
                background-color: ${COLOR_BRAND};
            }

            @media (max-width: 600px) {
                margin: 3px auto;
            }
        `};
`;

export default StyledDayButton;
