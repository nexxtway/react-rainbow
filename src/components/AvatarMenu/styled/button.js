import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const StyledButton = styled.button`
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
        box-shadow: 0 0 0 4px ${COLOR_GRAY_2};
    }

    :active {
        transform: scale(0.97);
        transition: all 0.2s ease;
    }

    :hover {
        box-shadow: 0 0 0 4px ${COLOR_GRAY_2};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    &[disabled] {
        cursor: default;
    }
`;

export default StyledButton;
