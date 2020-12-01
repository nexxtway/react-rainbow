import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayButton = attachThemeAttrs(styled.button)`
    font: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 48px;
    line-height: 36px;
    height: 38px;
    width: 38px;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    overflow: visible;
    text-transform: none;
    appearance: button;
    border: 1px solid transparent;
    position: relative;
    
    ${props =>
        !props.isHovered &&
        `
        &:hover {
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
        }
    `}

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

    ${props =>
        props.isToday &&
        `
        font-weight: 900;

        &::after {
            content: '';
            height: 4px;
            width: 4px;
            position: absolute;
            top: 28px;
            left: 16px;
            border-radius: 50%;
            background: ${
                props.isSelected || props.isHovered
                    ? props.palette.getContrastText(props.palette.brand.main)
                    : props.palette.brand.main
            };
        }

        
    `}

    ${props =>
        props.isSelected &&
        props.isToday &&
        `
            &:hover,
            &:focus,
            &:active {
                &::after {
                    top: 27px;
                    left: 16px;
                }
            }
        `};

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
        `};

    ${props =>
        props.isHovered &&
        `
        color: ${props.palette.getContrastText(props.palette.brand.main)};
        background-color: ${props.palette.brand.dark};
        `};
`;

export default StyledDayButton;
