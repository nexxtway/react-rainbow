import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledSelectValue = styled.input.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const brandMainContrastText = getContrastText(brandMainColor);
    const brandDarkContrastText = getContrastText(brandDarkColor);

    return {
        brandMainColor,
        brandDarkColor,
        brandMainContrastText,
        brandDarkContrastText,
    };
})`
    font-size: 40px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => props.brandMainColor};
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
        background: ${props => props.brandDarkColor};
    }

    &::-moz-selection {
        color: ${props => props.brandDarkContrastText};
        background: ${props => props.brandDarkColor};
    }

    &[placeholder]:focus::-webkit-input-placeholder {
        color: ${props => props.brandDarkContrastText};
    }

    &[placeholder]:focus::-moz-placeholder {
        color: ${props => props.brandDarkContrastText};
    }

    &[placeholder]:focus:-ms-input-placeholder {
        color: ${props => props.brandDarkContrastText};
    }

    &[placeholder]:focus:-moz-placeholder {
        color: ${props => props.brandDarkContrastText};
    }

    &::-webkit-input-placeholder {
        color: ${props => props.brandMainColor};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &::-moz-placeholder {
        color: ${props => props.brandMainColor};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-ms-input-placeholder {
        color: ${props => props.brandMainColor};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:-moz-placeholder {
        color: ${props => props.brandMainColor};
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
    }

    &:focus,
    &:active {
        color: ${props => props.brandMainContrastText};
        background-color: ${props => props.brandMainColor};
        box-shadow: 0 0 2px ${props => props.brandMainColor};
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
            color: #f00;
        `};
`;

export default StyledSelectValue;
