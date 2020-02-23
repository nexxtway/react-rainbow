import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledButton = attachThemeAttrs(styled.button)`
    font: inherit;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    background: transparent;
    border: 0;
    text-align: inherit;
    border-radius: ${BORDER_RADIUS_2};
    cursor: pointer;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover {
        background-color: ${props => props.palette.action.hover};
    }

    &:focus {
        outline: none;
        background-color: ${props => props.palette.action.hover};
    }

    &[aria-pressed='true'] {
        background-color: ${props => props.palette.action.active};
    }

    & * {
        pointer-events: none;
    }
`;

export default StyledButton;
