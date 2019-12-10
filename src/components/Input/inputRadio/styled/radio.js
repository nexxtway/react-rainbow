import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { COLOR_GRAY_1, COLOR_GRAY_2, COLOR_WHITE } from '../../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import getTheme from '../../../../styles/helpers/getTheme';

const Radio = styled(HiddenElement).attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand, success, error } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const { main: successMainColor, dark: successDarkColor } = success;
    const { main: errorMainColor, dark: errorDarkColor } = error;

    return {
        brandMainColor,
        brandDarkColor,
        successMainColor,
        successDarkColor,
        errorMainColor,
        errorDarkColor,
        getContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
        successShadow: `0 0 2px ${successMainColor}`,
        errorShadow: `0 0 2px ${errorMainColor}`,
    };
})`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${props => `1px solid ${props.brandMainColor}`};
        border-radius: ${BORDER_RADIUS_2};
        background: ${COLOR_WHITE};
        margin-right: ${MARGIN_SMALL};
        transition: border 0.1s linear, background-color 0.1s linear;
        box-sizing: border-box;
        padding: 0;

        &::after {
            content: '';
            height: 12px;
            width: 12px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: ${BORDER_RADIUS_2};
            background: transparent;
            opacity: 0;
            transform: scale(0.1, 0.1);
            transition: all 0.2s ease-in;
            box-sizing: border-box;
        }
    }

    :checked ~ label > .rainbow-input_faux {
        background: ${COLOR_WHITE};
        border: 2px solid;
        border-color: ${props => (props.error ? props.errorMainColor : props.brandMainColor)};

        &::after {
            opacity: 1;
            transform: scale(1, 1);
            transition: all 0.2s ease-in;
            background: ${props => (props.error ? props.errorMainColor : props.brandMainColor)};
            box-sizing: border-box;
        }
    }

    :focus ~ label > .rainbow-input_faux {
        border: 2px solid;
        border-color: ${props => (props.error ? props.errorMainColor : props.brandMainColor)};
        box-shadow: ${props => (props.error ? props.errorShadow : props.brandShadow)};
    }

    &[disabled] ~ label > .rainbow-input_faux {
        background-color: ${COLOR_GRAY_1};
        border-color: ${COLOR_GRAY_2};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        background: ${COLOR_WHITE};
        box-sizing: border-box;
    }

    ${props =>
        props.error &&
        `
            border: 2px solid ${props.errorMainColor};

            :checked ~ label > .rainbow-input_faux {
                border-color: ${props.errorMainColor};
        
                &::after {
                    background: ${props.errorMainColor};
                }
            }

            :focus ~ label > .rainbow-input_faux {
                border-color: ${props.errorMainColor};
                box-shadow: ${props.errorShadow};
            }
        `};
`;

export default Radio;
