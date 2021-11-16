/* stylelint-disable property-no-vendor-prefix */
import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import Card from '../Card';
import { StyledInput as StyledPhoneInput } from '../PhoneInput/styled';

export const StyledCard = styled(Card)`
    padding: 10px;
`;

export const StyledContent = styled.div`
    width: 19rem;
`;

export const StyledInput = styled(StyledPhoneInput)`
    padding-left: 8px;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
        padding-left: 8px;
    }

    :focus,
    :active {
        outline: 0;
        padding: 0;
        padding-left: 8px;
    }
`;

export const StyledAlphaInput = styled(StyledInput)`
    width: 2.5em;
    text-align: center;
    padding-right: 0.275rem;
    font-weight: normal;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;

export const StyledAlpha = attachThemeAttrs(styled.div)`
    position: relative;
    display: flex;
    align-items: center;
    color: ${props => props.palette.text.header};
    font-weight: bold;

    :before {
        content: '';
        position: absolute
        height: 1.5rem;
        margin: 0 auto;

        border-left: 1px solid ${props => props.palette.border.divider};
        ${props =>
            props.readOnly &&
            `
            border-left: 1px solid transparent;
            padding-left: 8px;
        `};

        ${props =>
            props.disabled &&
            `
            border-left: 1px solid ${props.palette.border.disabled};
            }
        `};
    }
`;

export const StyledColorSample = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
`;
