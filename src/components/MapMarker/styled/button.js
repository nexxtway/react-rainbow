import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_1 } from '../../../styles/colors';

const StyledButton = styled.button`
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
        background-color: ${COLOR_GRAY_1};
    }

    &:focus {
        outline: none;
        background-color: ${COLOR_GRAY_1};
    }

    &[aria-pressed='true'] {
        background-color: ${COLOR_GRAY_1};
    }

    & * {
        pointer-events: none;
    }
`;

export default StyledButton;
