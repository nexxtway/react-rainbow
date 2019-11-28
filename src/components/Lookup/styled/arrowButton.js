import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_3 } from '../../../styles/colors';

const StyledArrowButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1rem;
    position: absolute;
    width: 100%;
    z-index: 10;
    background: ${COLOR_WHITE};

    &::after {
        content: '';
        position: absolute;
        display: block;
        left: 50%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        color: ${COLOR_GRAY_3};
        transform: rotate(135deg);
    }

    ${props =>
        props.arrow === 'up' &&
        `
            top: 0;
            margin-top: 0.2rem;

            &::after {
                border-width: 0 0 0.15em 0.15em;
                top: 40%;
            }
    `}

    ${props =>
        props.arrow === 'down' &&
        `
            bottom: 0;
            margin-bottom: 0.2rem;

            &::after {
                border-width: 0.15em 0.15em 0 0;
            }
    `}
`;

export default StyledArrowButton;
