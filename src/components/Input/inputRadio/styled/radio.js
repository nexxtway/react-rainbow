import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { BORDER_RADIUS_2 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

function getInitialBorder(props) {
    if (props.error) {
        return `2px solid ${props.palette.error.main}`;
    }
    return `1px solid ${props.palette.border.divider}`;
}

function getColor(props) {
    if (props.error) {
        return props.palette.error.main;
    }
    return props.palette.brand.main;
}

function getShadow(props) {
    if (props.error) {
        return props.shadows.error;
    }
    return props.shadows.brand;
}

const Radio = attachThemeAttrs(styled(HiddenElement))`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${getInitialBorder};
        border-radius: ${BORDER_RADIUS_2};
        background: ${props => props.palette.background.main};
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
        background: ${props => props.palette.background.main};
        border: 2px solid;
        border-color: ${getColor};

        &::after {
            opacity: 1;
            transform: scale(1, 1);
            transition: all 0.2s ease-in;
            background: ${getColor};
            box-sizing: border-box;
        }
    }

    :focus ~ label > .rainbow-input_faux {
        border: 2px solid;
        border-color: ${getColor};
        box-shadow: ${getShadow};
    }

    &[disabled] ~ label > .rainbow-input_faux {
        background-color: ${props => props.palette.background.disabled};
        border-color: ${props => props.palette.border.divider};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        background: ${props => props.palette.background.main};
        box-sizing: border-box;
    }
`;

export default Radio;
