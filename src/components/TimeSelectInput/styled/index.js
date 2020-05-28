import styled from 'styled-components';
import { PADDING_X_SMALL, PADDING_XX_SMALL } from '../../../styles/paddings';
import { MARGIN_XX_SMALL, MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { DownArrow, UpArrow } from '../icons';
import HiddenElement from '../../Structural/hiddenElement';
import HelpText from '../../Input/styled/helpText';
import ErrorText from '../../Input/styled/errorText';

export const StyledFieldset = styled.fieldset`
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const StyledLegend = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    margin: auto;
    display: inline-block;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: ${MARGIN_X_SMALL};
    box-sizing: border-box;
`;

export const StyledDots = attachThemeAttrs(styled.span)`
    font-size: 32px;
    font-weight: 200;
    height: 100%;
    color: ${props => props.palette.brand.main};
    margin: auto ${PADDING_XX_SMALL};
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.disabled &&
        `
        cursor: default;
        pointer-events: none;
        color: ${props.palette.text.disabled};
    `};
    ${props =>
        props.readOnly &&
        `
        cursor: default;
        pointer-events: none;
        background-color: transparent;
        color: ${props.palette.text.label};
    `};

    @media (max-width: 600px) {
        margin: 0;
    }
`;

export const StyledDownArrow = attachThemeAttrs(styled(DownArrow))`
    color: ${props => (props.disabled ? props.palette.text.disabled : props.palette.brand.main)};
`;

export const StyledInputHidden = attachThemeAttrs(styled(HiddenElement))`
    color: inherit;
    font: inherit;
    line-height: normal;
    box-sizing: border-box;
    visibility: hidden;

    ::-moz-focus-inner {
        border: 0;
        padding: 0 !important;
    }

    :checked + label,
    :active + label,
    :focus + label {
        font-weight: 300;
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }
`;

export const StyledOptionLabel = attachThemeAttrs(styled.label)`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => replaceAlpha(props.palette.getContrastText(props.palette.brand.main), 0.3)};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.palette.brand.dark};
        border-radius: 4px;
    }

    @media (max-width: 340px) {
        font-size: 22px;
    }
`;

export const StyledSelectContent = attachThemeAttrs(styled.div)`
    height: 100px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.palette.background.secondary};
    border-radius: 8px;
    padding: ${PADDING_X_SMALL};
    ${props =>
        props.readOnly &&
        `
        cursor: default;
        pointer-events: none;
        background-color: transparent;
    `};

    @media (max-width: 600px) {
        width: 100%;
        margin: 56px 0 40px 0;
    }
`;

export const StyledSelectValue = attachThemeAttrs(styled.input).attrs(props => {
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
    ${props =>
        props.disabled &&
        `
        cursor: default;
        pointer-events: none;
        color: ${props.palette.text.disabled};

        &[placeholder]::-webkit-input-placeholder {
            color: ${props.palette.text.disabled};
        }

        &[placeholder]::-moz-placeholder {
            color: ${props.palette.text.disabled};
        }

        &[placeholder]:-ms-input-placeholder {
            color: ${props.palette.text.disabled};
        }

        &[placeholder]:-moz-placeholder {
            color: ${props.palette.text.disabled};
        }
    `};
    ${props =>
        props.readOnly &&
        `
        border: none;
        border-radius: 0;
        background-color: transparent;
        cursor: default;
        pointer-events: none;
        color: ${props.palette.text.label};

        :focus-within {
            box-shadow: none;
            border: none;
        }
    `}

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

export const StyledUpArrow = attachThemeAttrs(styled(UpArrow))`
    color: ${props => (props.disabled ? props.palette.text.disabled : props.palette.brand.main)};
`;

export const StyledVerticalButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${MARGIN_XX_SMALL} 0 ${MARGIN_X_SMALL};

    > :first-child {
        border-radius: 24px 24px 0 0;
    }

    > :last-child {
        border-radius: 0 0 24px 24px;
        margin-top: -1px;
    }

    @media (max-width: 600px) {
        margin-left: 0;
    }

    ${props =>
        props.readOnly &&
        `
        display: none;
    `};
`;

export const StyledHelpText = styled(HelpText)`
    text-align: center;
`;

export const StyledErrorText = styled(ErrorText)`
    text-align: center;
`;
