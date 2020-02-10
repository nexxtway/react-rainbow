import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_3, BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledInputRange = attachThemeAttrs(styled.input)`
    appearance: none;
    width: 100%;
    margin: 0.5rem 0;
    background: transparent;
    border-radius: ${BORDER_RADIUS_3};
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    line-height: normal;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &::-webkit-slider-thumb {
        appearance: none;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${props => props.palette.brand.main};
        border: 0;
        box-shadow: ${props => props.shadows.shadow_1};
        cursor: pointer;
        transition: all 0.3s ease 0s;
        margin-top: calc(((1rem / 2) - (4px / 2)) * -1);
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: ${props => props.palette.background.highlight};
        border-radius: ${BORDER_RADIUS_3};
    }

    &::-moz-range-thumb {
        appearance: none;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${props => props.palette.brand.main};
        border: 0;
        box-shadow: ${props => props.shadows.shadow_1};
        cursor: pointer;
        transition: background 0.15s ease-in-out;
    }

    &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: ${props => props.palette.background.highlight};
        border-radius: ${BORDER_RADIUS_3};
    }

    &::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: ${BORDER_RADIUS_3};
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    &::-ms-thumb {
        width: 1rem;
        height: 1rem;
        border-radius: ${BORDER_RADIUS_2};
        background: ${props => props.palette.brand.main};
        border: 0;
        box-shadow: rgba(0, 0, 0, 0.16) 0 2px 3px;
        cursor: pointer;
        transition: background 0.15s ease-in-out;
    }

    &:focus {
        outline: 0;
    }

    &::-webkit-slider-thumb:hover {
        background-color: ${props => props.palette.brand.dark};
    }

    &::-moz-range-thumb:hover {
        background-color: ${props => props.palette.brand.dark};
    }

    &::-ms-thumb:hover {
        background-color: ${props => props.palette.brand.dark};
    }

    &:focus::-webkit-slider-thumb {
        background-color: ${props => props.palette.brand.main};
        box-shadow: $shadow-outline;
    }

    &:active::-webkit-slider-thumb {
        background-color: ${props => props.palette.brand.main};
        transition: all 0.3s ease 0s;
        transform: scale3d(1.5, 1.5, 1);
    }

    &:focus::-moz-range-thumb {
        background-color: ${props => props.palette.brand.main};
        box-shadow: $shadow-outline;
    }

    &:active::-moz-range-thumb {
        background-color: ${props => props.palette.brand.main};
    }

    &[disabled]::-webkit-slider-thumb {
        background-color: ${props => props.palette.background.disabled};
        box-shadow: ${props => props.shadows.shadow_4};
        cursor: default;
    }

    &[disabled]::-webkit-slider-runnable-track {
        background-color: ${props => props.palette.background.disabled};
        cursor: default;
    }

    &[disabled]::-moz-range-thumb {
        background-color: ${props => props.palette.background.disabled};
        cursor: default;
    }

    &[disabled]::-moz-range-track {
        background-color: ${props => props.palette.background.disabled};
    }

    &[disabled]::-ms-thumb {
        background-color: ${props => props.palette.background.disabled};
        cursor: default;
    }

    &[disabled]::-ms-track {
        background-color: ${props => props.palette.background.disabled};
        cursor: default;
    }
`;

export default StyledInputRange;
