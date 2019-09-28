import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import {
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_ERROR,
} from '../../../../styles/colors';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../../styles/shadows';

function getInitialBorder(props) {
    if (props.error) {
        return `2px solid ${COLOR_ERROR}`;
    }
    return `1px solid ${COLOR_GRAY_2}`;
}

function getColor(props) {
    if (props.error) {
        return COLOR_ERROR;
    }
    return COLOR_BRAND;
}

function getShadow(props) {
    if (props.error) {
        return SHADOW_ERROR;
    }
    return SHADOW_OUTLINE;
}

const Checkbox = styled(HiddenElement)`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${getInitialBorder};
        border-radius: ${BORDER_RADIUS_3};
        background: ${COLOR_WHITE};
        margin-right: ${MARGIN_SMALL};
        transition: border 0.1s linear, background-color 0.1s linear;
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
    }

    :checked ~ label > .rainbow-input_faux {
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
        background-color: ${COLOR_GRAY_1};
        border-color: ${COLOR_GRAY_2};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        border-color: ${COLOR_WHITE};
    }

    :focus:checked ~ label > .rainbow-input_faux {
        border-color: ${getColor};
        background-color: ${COLOR_WHITE};
        box-shadow: ${getShadow};
    }
`;

export default Checkbox;
