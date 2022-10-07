import styled, { keyframes } from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';

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

const flash = color => keyframes`
    100% {
        box-shadow: 0 0 0 5px ${color};
    }
`;

const Checkbox = attachThemeAttrs(styled(HiddenElement))`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${getInitialBorder};
        border-radius: ${BORDER_RADIUS_3};
        background: ${props => props.palette.background.main};
        margin-right: ${MARGIN_SMALL};
        transition: border 0.1s linear, background-color 0.1s linear;
        box-sizing: border-box;
    }

    :checked ~ label > .rainbow-input_faux::after {
        display: block;
        content: '';
        height: 0.4rem;
        width: 0.65rem;
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
        border-bottom: 2px solid;
        border-left: 2px solid;
        border-color: ${getColor};
        box-sizing: border-box;
        padding: 0;
    }

    :checked ~ label > .rainbow-input_faux {
        animation: ${props =>
            props.error
                ? flash(replaceAlpha(props.palette.error.main, 0.5))
                : flash(replaceAlpha(props.palette.brand.main, 0.5))} 0.2s linear;
        border: 2px solid;
        border-color: ${getColor};
    }

    :focus ~ label > .rainbow-input_faux {
        content: '';
        border: 2px solid;
        border-color: ${getColor};
        box-shadow: ${getShadow};
    }

    &[disabled] ~ label > .rainbow-input_faux {
        background-color: ${props => props.palette.background.disabled};
        border-color: ${props => props.palette.border.disabled};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        border-color: ${props => props.palette.background.main};
        box-sizing: border-box;
    }

    :focus:checked ~ label > .rainbow-input_faux {
        border-color: ${getColor};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${getShadow};
    }
`;

export default Checkbox;
