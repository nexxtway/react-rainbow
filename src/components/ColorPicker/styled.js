import styled, { css } from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_SMALL, PADDING_XX_SMALL } from '../../../styles/paddings';
import { BORDER_RADIUS_3, BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_1 } from '../../styles/colors';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Input from '../Input';
import Slider from './slider';

const StyledCircleColor = css`
    background-color: ${props => props.$color};
    border-radius: 50%;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledPreview = attachThemeAttrs(styled.div)`
    width: 50px;
    height: 50px;
    margin: 10px 0;
    ${StyledCircleColor}
`;

export const StyledDefaulColor = attachThemeAttrs(styled.div)`
    width: 40px;
    height: 40px;
    margin: 0px 15px 15px 0px
    flex: 0 0 auto;
    ${StyledCircleColor}

    :hover {
        cursor: pointer;
    }
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
`;

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const StyledSaturationContainer = attachThemeAttrs(styled.div)`
    position: relative;
    flex: 1 0 auto;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledSlidersContainer = styled.div`
    flex: 1 0 auto;
    margin-right: 15px;
    margin-top: 5px;
`;

export const StyledHexColorContainer = styled.div`
    flex: 0 3 auto;
`;

export const StyledRgbaColorContainer = styled.div`
    flex: 0 4 auto;
`;

export const StyledColorsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    margin: 0px -15px;
    padding: 15px 0px 0px 15px;
`;

export const StyledLabel = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    box-sizing: border-box;
    text-transform: uppercase;
    flex: 0 0 auto;
`;

export const StyledHexColorIcon = attachThemeAttrs(styled.span)`
    font: inherit;
    line-height: 2.5rem;
    font-size: 1rem;
`;

export const StyledNumberInput = styled(Input)`
    margin-left: 5px;
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const StyledAlphaSlider = styled(Slider)`
    input::-webkit-slider-runnable-track {
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    }

    input::-moz-range-track {
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%) !important;
    }
`;

export const StyledHueSlider = styled(Slider)`
    input::-webkit-slider-runnable-track {
        background: linear-gradient(
            to right,
            rgb(255, 0, 0) 0%,
            rgb(255, 255, 0) 17%,
            rgb(0, 255, 0) 33%,
            rgb(0, 255, 255) 50%,
            rgb(0, 0, 255) 67%,
            rgb(255, 0, 255) 83%,
            rgb(255, 0, 0) 100%
        ) !important;
    }

    input::-moz-range-track {
        background: linear-gradient(
            to right,
            rgb(255, 0, 0) 0%,
            rgb(255, 255, 0) 17%,
            rgb(0, 255, 0) 33%,
            rgb(0, 255, 255) 50%,
            rgb(0, 0, 255) 67%,
            rgb(255, 0, 255) 83%,
            rgb(255, 0, 0) 100%
        ) !important;
    }
`;

export const StyledSlider = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding: ${PADDING_XX_SMALL} 0 ${PADDING_SMALL} 0;
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
        box-shadow: $shadow-outline;
    }

    &:active::-webkit-slider-thumb {
        background-color: #fff;
        transition: all 0.3s ease 0s;
        transform: scale3d(1.5, 1.5, 1);
    }

    &:focus::-moz-range-thumb {
        background-color: #fff;
        box-shadow: $shadow-outline;
    }

    &:active::-moz-range-thumb {
        background-color: #fff;
    }
`;
