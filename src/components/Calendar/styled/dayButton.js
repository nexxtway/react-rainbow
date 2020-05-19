import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledDayButton = attachThemeAttrs(styled.button)`
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
        background-color: ${props => props.palette.action.hover};
    }

    &:active {
        transform: scale(0.85);
        transition: all 0.2s ease;
    }

    &:focus,
    &:active {
        box-shadow: ${props => props.shadows.brand};
        border: 1px solid ${props => props.palette.brand.main};
        line-height: 36px;
    }

    @media (max-width: 600px) {
        margin: 3px auto;
    }

    ${props =>
        props.isSelected &&
        `
            color: ${props.palette.getContrastText(props.palette.brand.main)};
            background-color: ${props.palette.brand.main};
            text-align: center;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            font-weight: 600;
            border-radius: 48px;
            line-height: 36px;
            height: 38px;
            width: 38px;
            margin: 5px auto;
            padding: 0;
            border: none;
            outline: none;
        
            &:active {
                transform: scale(0.85);
                transition: all 0.2s ease;
            }
        
            &:hover {
                background-color: ${props.palette.brand.dark};
            }

            &:focus {
                box-shadow: 0 0 8px ${props.palette.brand.main};
            }

            @media (max-width: 600px) {
                margin: 3px auto;
            }
        `};

    ${props =>
        props.isWithinRange &&
        !props.isSelected &&
        `
        background-color: ${replaceAlpha(props.palette.brand.light, 1)};
        `};
`;

export default StyledDayButton;
