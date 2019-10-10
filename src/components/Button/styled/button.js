import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_BRAND_ACTIVE,
    COLOR_BRAND,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_GRAY_4,
    COLOR_ERROR,
    COLOR_ERROR_ACTIVE,
    COLOR_SUCCESS,
    COLOR_SUCCESS_ACTIVE,
} from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_5, SHADOW_1 } from '../../../styles/shadows';

const StyledButton = styled.button`
    align-items: center;
    display: inline-flex;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    justify-content: center;
    position: relative;
    background: transparent;
    background-clip: border-box;
    border: 1px solid transparent;
    border-radius: 100px;
    line-height: 2.375rem;
    text-decoration: none;
    color: ${COLOR_BRAND};
    padding: 0 1rem;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    text-align: center;
    vertical-align: middle;
    transition: border 0.15s linear;

    &:hover,
    &:focus,
    &:active,
    &:visited {
        text-decoration: none;
    }

    &:hover,
    &:focus {
        color: ${COLOR_BRAND_ACTIVE};
    }

    &:focus {
        outline: 0;
        box-shadow: ${SHADOW_OUTLINE};
    }

    &:active {
        color: ${COLOR_BRAND_ACTIVE};
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    &[disabled] {
        color: ${COLOR_GRAY_2};
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;
    }

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_BRAND};

            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_GRAY_1};
            }

            &[disabled] {
                background-color: ${props.isLoading ? COLOR_WHITE : 'transparent'};
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_WHITE};

            &:link,
            &:visited,
            &:active {
                color: ${COLOR_WHITE}
            }

            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_BRAND_ACTIVE};
                border-color: ${COLOR_BRAND_ACTIVE};
                color: ${COLOR_WHITE};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? COLOR_BRAND : COLOR_GRAY_1};
                border-color: ${props.isLoading ? COLOR_BRAND : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_BRAND};

            &:hover,
            &:focus,
            &:active {
                border-color: ${COLOR_BRAND_ACTIVE};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.isLoading ? COLOR_BRAND : COLOR_GRAY_2};
                
            }
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            background-color: transparent;
            border: 1px solid transparent;
            color: ${COLOR_WHITE};

            &:hover,
            &:focus,
            &:active {
                color: ${COLOR_GRAY_3};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${SHADOW_5};
            }
        
            &[disabled] {
                background-color: transparent;
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props =>
        props.variant === 'border-inverse' &&
        `   background-color: transparent;
            border: 1px solid ${COLOR_WHITE};
            color: ${COLOR_WHITE};

            &:hover,
            &:focus,
            &:active {
                border-color: ${COLOR_GRAY_3};
                color: ${COLOR_GRAY_3};
            }
        
            &:focus {
                outline: none;
                box-shadow: ${SHADOW_5};
            }
        
            &[disabled] {
                background-color: transparent;
                border-color: ${props.isLoading ? COLOR_WHITE : COLOR_GRAY_4};
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props =>
        props.variant === 'destructive' &&
        `
            background-color: ${COLOR_ERROR};
            border: 1px solid ${COLOR_ERROR};
            color: ${COLOR_WHITE};

            &:link,
            &:visited,
            &:active {
                color: ${COLOR_WHITE};
            }
        
            &:hover,
            &:focus {
                background-color: ${COLOR_ERROR_ACTIVE};
                color: ${COLOR_WHITE};
            }
        
            &:active {
                background-color: ${COLOR_ERROR_ACTIVE};
                border-color: ${COLOR_ERROR_ACTIVE};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? COLOR_ERROR : COLOR_GRAY_1};
                border-color: ${props.isLoading ? COLOR_ERROR : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
            color: ${COLOR_WHITE};

            &:link,
            &:visited,
            &:active,
            &:hover,
            &:focus {
                color: ${COLOR_WHITE};
            }
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_SUCCESS_ACTIVE};
                border-color: ${COLOR_SUCCESS_ACTIVE};
            }
        
            &[disabled] {
                background-color: ${props.isLoading ? COLOR_SUCCESS : COLOR_GRAY_1};
                border-color: ${props.isLoading ? COLOR_SUCCESS : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props => props.shaded && `box-shadow: ${SHADOW_1};`};
`;

export default StyledButton;
