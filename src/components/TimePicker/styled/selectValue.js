import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledSelectValue = attachThemeAttrs(styled.input)`
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
        color: ${props => props.palette.getContrastText(props.palette.brand.dark)};
        background: ${props => props.palette.brand.dark};
    }

    &::-moz-selection {
        color: ${props => props.palette.getContrastText(props.palette.brand.dark)};
        background: ${props => props.palette.brand.dark};
    }

    &[placeholder]:focus::-webkit-input-placeholder {
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    }

    &[placeholder]:focus::-moz-placeholder {
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    }

    &[placeholder]:focus:-ms-input-placeholder {
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    }

    &[placeholder]:focus:-moz-placeholder {
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
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
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
        background-color: ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
        outline: none;
        caret-color: transparent;
    }

    ${props =>
        props.isFocused === true &&
        `
        color: ${props.palette.getContrastText(props.palette.brand.main)};
        background-color: ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
        outline: none;
        caret-color: transparent;

        &[placeholder]::-webkit-input-placeholder {
            color: ${props.palette.getContrastText(props.palette.brand.main)};
        }

        &[placeholder]::-moz-placeholder {
            color: ${props.palette.getContrastText(props.palette.brand.main)};
        }

        &[placeholder]:-ms-input-placeholder {
            color: ${props.palette.getContrastText(props.palette.brand.main)};
        }

        &[placeholder]:-moz-placeholder {
            color: ${props.palette.getContrastText(props.palette.brand.main)};
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
