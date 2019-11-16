import styled from 'styled-components';
import { COLOR_ERROR } from '../../../styles/colors';

const StyledInputIcon = styled.span`
    height: 100%;
    width: 22px;
    position: absolute;
    top: 0;
    right: 0.8rem;
    line-height: 1;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s linear;

    svg {
        width: 16px;
        height: 16px;
        font-size: 16px;
    }

    :not(button) {
        pointer-events: none;
    }

    ${props =>
        props.error &&
        `
            fill: ${COLOR_ERROR};
            color: ${COLOR_ERROR};
        `};
`;

export default StyledInputIcon;
