import styled from 'styled-components';
import { COLOR_BRAND, COLOR_WHITE, COLOR_BRAND_ACTIVE } from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';

const StyledSelectValue = styled.input`
    font-size: 40px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${COLOR_BRAND};
    border: none;
    width: 82px;
    background-color: transparent;
    border-radius: 4px;
    height: 100%;
    text-align: center;

    &::selection {
        color: ${COLOR_WHITE};
        background: ${COLOR_BRAND_ACTIVE};
    }

    &::-moz-selection {
        color: ${COLOR_WHITE};
        background: ${COLOR_BRAND_ACTIVE};
    }

    &[placeholder]:focus::-webkit-input-placeholder {
        color: ${COLOR_WHITE};
    }

    &[placeholder]:focus::-moz-placeholder {
        color: ${COLOR_WHITE};
    }

    &[placeholder]:focus:-ms-input-placeholder {
        color: ${COLOR_WHITE};
    }

    &[placeholder]:focus:-moz-placeholder {
        color: ${COLOR_WHITE};
    }

    &::-webkit-input-placeholder {
        color: ${COLOR_BRAND};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &::-moz-placeholder {
        color: ${COLOR_BRAND};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-ms-input-placeholder {
        color: ${COLOR_BRAND};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-moz-placeholder {
        color: ${COLOR_BRAND};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:focus,
    &:active {
        color: ${COLOR_WHITE};
        background-color: ${COLOR_BRAND};
        box-shadow: ${SHADOW_OUTLINE};
        outline: none;
        caret-color: transparent;
    }

    @media (max-width: 600px) {
        width: 24%;
        font-size: 32px;
        font-weight: 100;

        &::placeholder {
            font-size: 34px;
            font-weight: 100;
        }
    }

    @media (max-width: 340px) {
        font-size: 24px;

        &::placeholder {
            font-size: 24px;
        }
    }

    ${props =>
        props.isInput &&
        `
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            padding: 0;
        `};
    ${props =>
        !props.isInput &&
        `
            border: 0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        `};
`;

export default StyledSelectValue;
