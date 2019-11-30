import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import {
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_ERROR,
} from '../../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../../styles/borderRadius';
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

const Radio = styled(HiddenElement)`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${getInitialBorder};
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
        background-color: ${COLOR_GRAY_1};
        border-color: ${COLOR_GRAY_2};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        background: ${COLOR_WHITE};
        box-sizing: border-box;
    }
`;

export default Radio;
