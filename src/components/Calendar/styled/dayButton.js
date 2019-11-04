import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_BRAND } from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledDayButton = styled.button`
    border: none;
    outline: none;
    transition: all 0.2s ease;
    background-color: transparent;
    border-radius: 48px;
    line-height: 36px;
    height: 36px;
    width: 36px;
    margin: 5px auto;

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
    ${props =>
        props.isFocused &&
        `
        box-shadow: ${SHADOW_OUTLINE};
    `};
`;

export default StyledDayButton;
