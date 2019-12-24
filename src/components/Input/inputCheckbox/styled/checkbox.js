import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import getTheme from '../../../../styles/helpers/getTheme';

function getInitialBorder(props) {
    if (props.error) {
        return `2px solid ${props.palette.error.main}`;
    }
    return `1px solid ${props.palette.divider}`;
}

function getColor(props) {
    if (props.error) {
        return props.palette.error.main;
    }
    return props.palette.brand.main;
}

function getShadow(props) {
    if (props.error) {
        return props.errorShadow;
    }
    return props.brandShadow;
}

const Checkbox = styled(HiddenElement).attrs(props => {
    const palette = getTheme(props).palette;
    return {
        palette,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${palette.brand.main}`,
        errorShadow: `0 0 2px ${palette.error.main}`,
    };
})`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: ${getInitialBorder};
        border-radius: ${BORDER_RADIUS_3};
        background: ${props => props.palette.background.primary};
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
        border-color: ${props => props.palette.divider};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        border-color: ${props => props.palette.background.primary};
        box-sizing: border-box;
    }

    :focus:checked ~ label > .rainbow-input_faux {
        border-color: ${getColor};
        background-color: ${props => props.palette.background.primary};
        box-shadow: ${getShadow};
    }
`;

export default Checkbox;
