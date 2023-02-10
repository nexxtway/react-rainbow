import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    position: relative;

    .StripeElement--focus {
        padding: 0.5175rem 1rem 0 0.9375rem;
        border: 2px solid ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
        outline: 0;

        ${props =>
            props.size === 'large' &&
            `
                padding: 0.84rem 1.125rem 0 1.125rem;
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                padding: 0.32rem 0.75rem 0 0.75rem;
            `};
    }

    .StripeElement--webkit-autofill {
        background-color: ${props => props.palette.background.main} !important;
    }

    ${props =>
        props.error &&
        `
        .StripeElement--empty {
            padding: 0.5175rem 1rem 0 0.9375rem;
            border: 2px solid ${props.palette.error.main};
        }

        .StripeElement--invalid {
            padding: 0.5175rem 1rem 0 0.9375rem;
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            background-clip: padding-box;
        }

        .StripeElement--focus {
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            outline: 0;
        }
    `}

`;

export default StyledContainer;
