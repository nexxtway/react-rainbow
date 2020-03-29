import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    position: relative;

    .StripeElement {
        font: inherit;
        width: 100%;
        transition: all 0.1s linear, padding 0s, border 0s;
        display: block;
        padding: 0.58rem 1rem 0 1rem;
        line-height: 2.5rem;
        color: ${props => props.palette.text.main};
        font-size: ${FONT_SIZE_TEXT_LARGE};
        box-sizing: border-box;
        margin: 0;
    }

    .StripeElement--focus {
        outline: 0;
        padding: 0.5175rem 1rem 0 0.9375rem;
        border: 2px solid ${props => props.palette.brand.main} !important;
        background-color: ${props => props.palette.background.main} !important;
        box-shadow: ${props => props.shadows.brand} !important;
    }

    .StripeElement--invalid {
        outline: 0;
        padding: 0.5175rem 1rem 0 0.9375rem;
        background-color: ${props => props.palette.background.main} !important;
        border: 2px solid ${props => props.palette.error.main} !important;
        box-shadow: ${props => props.shadows.error} !important;
    }

    .StripeElement--webkit-autofill {
        background-color: ${props => props.palette.background.main} !important;
    }

`;

export default StyledContainer;
