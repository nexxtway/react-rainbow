import styled from 'styled-components';
import {
    COLOR_GRAY_2,
    COLOR_GRAY_3,
    COLOR_BRAND_ACTIVE,
    COLOR_BRAND,
} from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';

const StyledIndicatorButton = styled.button`
    font: inherit;
    width: 0.5rem;
    height: 0.5rem;
    background: ${COLOR_GRAY_2};
    border-radius: 50%;
    border: 1px solid ${COLOR_GRAY_2};
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :hover {
        background-color: ${COLOR_GRAY_3};
        border: 1px solid ${COLOR_GRAY_3};
    }

    :focus {
        outline: 0;
        box-shadow: ${SHADOW_OUTLINE};
        border: 1px solid ${COLOR_BRAND_ACTIVE};
    }

    ${props =>
        props.isSelected &&
        `
            background: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};

            :hover {
                background: ${COLOR_BRAND_ACTIVE};
                border: 1px solid ${COLOR_BRAND_ACTIVE};
            }
        `};
`;

export default StyledIndicatorButton;
