import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSelectValue = attachThemeAttrs(styled.input).attrs(props => {
    const { getContrastText, brand } = props.palette;
    const brandDarkContrastText = getContrastText(brand.dark);
    const brandMainContrastText = getContrastText(brand.main);

    return {
        brandDarkContrastText,
        brandMainContrastText,
    };
})`
    font-size: 40px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => props.palette.brand.main};
    border: none;
    width: 82px;
    background-color: transparent;
    border-radius: 4px;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    line-height: normal;

    &::selection {
        color: ${props => props.brandDarkContrastText};
        background: ${props => props.palette.brand.dark};
    }

    &::-moz-selection {
        color: ${props => props.brandDarkContrastText};
        background: ${props => props.palette.brand.dark};
    }

    &[placeholder]:focus::-webkit-input-placeholder {
        color: ${props => props.brandMainContrastText};
    }

    &[placeholder]:focus::-moz-placeholder {
        color: ${props => props.brandMainContrastText};
    }

    &[placeholder]:focus:-ms-input-placeholder {
        color: ${props => props.brandMainContrastText};
    }

    &[placeholder]:focus:-moz-placeholder {
        color: ${props => props.brandMainContrastText};
    }

    &::-webkit-input-placeholder {
        color: ${props => props.palette.brand.main};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &::-moz-placeholder {
        color: ${props => props.palette.brand.main};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-ms-input-placeholder {
        color: ${props => props.palette.brand.main};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-moz-placeholder {
        color: ${props => props.palette.brand.main};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:focus,
    &:active {
        color: ${props => props.brandMainContrastText};
        background-color: ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
        outline: none;
        caret-color: transparent;
    }

    ${props =>
        props.isFocused === true &&
        `
        color: ${props.brandMainContrastText};
        background-color: ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
        outline: none;
        caret-color: transparent;

        &[placeholder]::-webkit-input-placeholder {
            color: ${props.brandMainContrastText};
        }

        &[placeholder]::-moz-placeholder {
            color: ${props.brandMainContrastText};
        }

        &[placeholder]:-ms-input-placeholder {
            color: ${props.brandMainContrastText};
        }

        &[placeholder]:-moz-placeholder {
            color: ${props.brandMainContrastText};
        }

    `};
    ${props =>
        props.isFocused === false &&
        `
        &[placeholder]::-webkit-input-placeholder {
            color: ${props.palette.brand.main};
        }

        &[placeholder]::-moz-placeholder {
            color: ${props.palette.brand.main};
        }

        &[placeholder]:-ms-input-placeholder {
            color: ${props.palette.brand.main};
        }

        &[placeholder]:-moz-placeholder {
            color: ${props.palette.brand.main};
        }

    `};

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
        !props.as === 'fieldset' &&
        `
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            padding: 0;
        `};
    ${props =>
        props.as === 'fieldset' &&
        `
            border: 0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        `};
`;

export default StyledSelectValue;
