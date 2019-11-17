import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_2 } from '../../../styles/colors';

const StyledIndicator = styled.span`
    height: 100%;
    right: 1.2rem;
    position: absolute;
    line-height: 1;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 45%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        color: ${COLOR_BRAND};
        box-sizing: border-box;
    }

    ${props =>
        props.disabled &&
        `
            &::after {
                color: ${COLOR_GRAY_2};
            }
    `}
`;

export default StyledIndicator;
