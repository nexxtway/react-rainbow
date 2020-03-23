import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    position: relative;

    .card-element{
        height: 2.5rem;
        background-color: ${props => props.palette.background.main};
        border: 1px solid ${props => props.palette.border.main};
        border-radius: ${BORDER_RADIUS_2};
        ${props =>
            props.disabled &&
            `
            background-color: ${props.palette.background.disabled} !important;
            border: 1px solid ${props.palette.border.disabled} !important;
        `}
    }

    .StripeElement {
        font: inherit;
        background-color: ${props => props.palette.background.main};
        border: 1px solid ${props => props.palette.border.main};
        border-radius: ${BORDER_RADIUS_2};
        width: 100%;
        transition: all 0.1s linear, padding 0s, border 0s;
        display: block;
        padding: 0.7rem 1rem 0 1rem;
        line-height: 2.5rem;
        height: 2.5rem;
        color: ${props => props.palette.text.main};
        font-size: ${FONT_SIZE_TEXT_LARGE};
        box-sizing: border-box;
        margin: 0;

        ${props =>
            props.disabled &&
            `
            background-color: ${props.palette.background.disabled} !important;
            border: 1px solid ${props.palette.border.disabled} !important;
            color: ${props.palette.text.disabled} !important;
            cursor: not-allowed;
            user-select: none;

            &:focus,
            &:active {
                box-shadow: none;
                background-color: ${props.palette.background.disabled} !important;
                border: 1px solid ${props.palette.border.disabled} !important;
            }
        `}
    }

    .StripeElement--focus {
        outline: 0;
        padding: 0.6562rem 1rem 0 0.9375rem;
        border: 2px solid ${props => props.palette.brand.main} !important;
        background-color: ${props => props.palette.background.main} !important;
        box-shadow: ${props => props.shadows.brand} !important;
    }

    .StripeElement--invalid {
        outline: 0;
        padding: 0.6562rem 1rem 0 0.9375rem;
        background-color: ${props => props.palette.background.main} !important;
        border: 2px solid ${props => props.palette.error.main} !important;
        box-shadow: ${props => props.shadows.error} !important;
    }

    .StripeElement--webkit-autofill {
        background-color: ${props => props.palette.background.main} !important;
    }

`;

export default StyledContainer;
