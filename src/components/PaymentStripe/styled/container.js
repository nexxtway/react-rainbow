import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const Container = attachThemeAttrs(styled.div)`
    label {
        margin-top: 10px;
    }

    .StripeElement {
        font: inherit;
        background-color: ${props => props.palette.background.main};
        border: 1px solid ${props => props.palette.border.main};
        border-radius: ${BORDER_RADIUS_2};
        width: 100%;
        transition: all 0.1s linear, padding 0s, border 0s;
        display: block;
        padding: 0.7rem 1rem 0 ${props => (props.inline ? '1rem' : '2.3rem')};
        line-height: 2.5rem;
        height: 2.5rem;
        color: ${props => props.palette.text.main};
        font-size: ${FONT_SIZE_TEXT_LARGE};
        box-sizing: border-box;
        margin: 0;
    }

    .StripeElement--focus {
        outline: 0;
        padding: 0.6562rem 1rem 0 ${props => (props.inline ? '0.9375rem' : '2.2375rem')};
        border: 2px solid ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
    }

    .StripeElement--invalid {
        background-color: ${props => props.palette.background.main};
        border: 2px solid ${props => props.palette.error.main};
        box-shadow: ${props => props.shadows.error};
        outline: 0;
    }

    .StripeElement--webkit-autofill {
        background-color: ${props => props.palette.background.main} !important;
    }
`;

export default Container;
