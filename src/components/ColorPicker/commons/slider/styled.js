import styled from 'styled-components';
import { BORDER_RADIUS_3, BORDER_RADIUS_2 } from '../../../../styles/borderRadius';
import { COLOR_GRAY_1 } from '../../../../styles/colors';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

export const StyledSlider = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding: 2px 0;
`;

export const StyledInputRange = attachThemeAttrs(styled.input)`
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
        background: #fff;
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
        background: #fff;
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
        background: #fff;
        border: 0;
        box-shadow: rgba(0, 0, 0, 0.16) 0 2px 3px;
        cursor: pointer;
        transition: background 0.15s ease-in-out;
    }

    &:focus {
        outline: 0;
    }

    &::-webkit-slider-thumb:hover {
        background-color: ${COLOR_GRAY_1};
    }

    &::-moz-range-thumb:hover {
        background-color: ${COLOR_GRAY_1};
    }

    &::-ms-thumb:hover {
        background-color: ${COLOR_GRAY_1};
    }

    &:focus::-webkit-slider-thumb {
        background-color: #fff;
        border: 1px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }

    &:active::-webkit-slider-thumb {
        background-color: #fff;
        transition: all 0.3s ease 0s;
        transform: scale3d(1.5, 1.5, 1);
    }

    &:focus::-moz-range-thumb {
        background-color: #fff;
        border: 1px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }

    &:active::-moz-range-thumb {
        background-color: #fff;
    }
`;
