import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_BRAND_ACTIVE,
    COLOR_SUCCESS,
    COLOR_SUCCESS_ACTIVE,
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_GRAY_4,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { SHADOW_OUTLINE, SHADOW_5, SHADOW_3 } from '../../../styles/shadows';

const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    background: transparent;
    background-clip: border-box;
    border: 0;
    border-radius: ${BORDER_RADIUS_2};
    line-height: 1.875rem;
    text-decoration: none;
    color: ${COLOR_GRAY_4};
    cursor: pointer;
    white-space: normal;
    user-select: none;
    vertical-align: middle;

    &:hover,
    &:focus,
    &:active {
        color: ${COLOR_BRAND_ACTIVE};
    }

    &:active {
        transform: scale(0.7);
        transition: all 0.3s ease;
    }

    &:focus {
        outline: 0;
        box-shadow: ${SHADOW_OUTLINE};
    }

    &[disabled] {
        color: ${COLOR_GRAY_2};
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;

        svg {
            fill: ${COLOR_GRAY_2};
        }
    }

    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_WHITE};
            
            &:link,
            &:visited,
            &:active {
                color: ${COLOR_WHITE};
            }
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_BRAND_ACTIVE};
                border: 1px solid ${COLOR_BRAND_ACTIVE};
                color: ${COLOR_WHITE};
            }
        
            &[disabled] {
                background-color: ${COLOR_GRAY_1};
                border: 1px solid ${COLOR_GRAY_1};
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
            &:active {
                color: ${COLOR_WHITE};
            }
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_SUCCESS_ACTIVE};
                border: 1px solid ${COLOR_SUCCESS_ACTIVE};
                color: ${COLOR_WHITE};
            }
        
            &[disabled] {
                background-color: ${COLOR_GRAY_1};
                border: 1px solid ${COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props =>
        props.variant === 'border' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: transparent;
                border: 1px solid ${COLOR_BRAND_ACTIVE};
                color: ${COLOR_BRAND_ACTIVE};
            }
        
            &[disabled] {
                background-color: transparent;
                border: 1px solid ${COLOR_GRAY_2};
                color: ${COLOR_GRAY_2};
            }
        `};
    ${props =>
        props.variant === 'border-filled' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_GRAY_4};
            transition: border 0.15s linear;
        
            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_GRAY_1};
            }
        
            &[disabled] {
                background-color: transparent;
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
        `
            background-color: transparent;
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
                border-color: ${COLOR_GRAY_4};
                color: ${COLOR_GRAY_4};
            }
        `};
    ${props =>
        props.shaded &&
        `
            box-shadow: ${SHADOW_3};
        `};
    ${props =>
        props.size === 'xx-small' &&
        `
            width: 1rem;
            height: 1rem;
            line-height: 1;

            svg {
                width: 0.55rem !important;
                height: 0.55rem !important;
                font-size: 0.55rem !important;
            }
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 1.25rem;
            height: 1.25rem;
            line-height: 1.25;

            svg {
                width: 0.6rem !important;
                height: 0.6rem !important;
                font-size: 0.6rem !important;
            }
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 1.65rem;
            height: 1.65rem;
            line-height: 1.65;

            svg {
                width: 0.65rem !important;
                height: 0.65rem !important;
        
                font-size: 0.65rem !important;
            }
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5;

            svg {
                width: 1rem !important;
                height: 1rem !important;
                font-size: 1rem !important;
            }
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 3rem;
            height: 3rem;
            line-height: 3;

            svg {
                width: 1.5rem !important;
                height: 1.5rem !important;
                font-size: 1rem !important;
            }
        `};
`;

export default StyledButton;
