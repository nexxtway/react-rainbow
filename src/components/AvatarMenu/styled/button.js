import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledButton = attachThemeAttrs(styled.button)`
    background-color: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    border-radius: ${BORDER_RADIUS_2};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: pointer;
    color: inherit;
    font: inherit;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :focus,
    :active {
        outline: 0;
        box-shadow: ${props => props.shadows.shadow_7};
    }

    :active {
        transform: scale(0.97);
        transition: all 0.2s ease;
    }

    :hover {
        box-shadow: ${props => props.shadows.shadow_7};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        cursor: pointer;
    }

    :hover span,
    :hover abbr {
        cursor: pointer;
    }

    &[disabled] {
        cursor: default;
    }
`;

export default StyledButton;
