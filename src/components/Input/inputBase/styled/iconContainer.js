import styled from 'styled-components';
import { COLOR_GRAY_3, COLOR_ERROR } from '../../../../styles/colors';

const IconContainer = styled.span`
    fill: ${COLOR_GRAY_3};
    height: 100%;
    width: 22px;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px !important;
        height: 16px !important;
        font-size: 16px !important;
    }

    :not(button) {
        pointer-events: none;
    }

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: ${props.readOnly && !props.disabled ? 0 : '0.8rem'};
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: ${props.readOnly && !props.disabled ? 0 : '0.8rem'};
    `}
    ${props =>
        props.error &&
        `
        fill: ${COLOR_ERROR};
        color: ${COLOR_ERROR};
    `}
`;

export default IconContainer;
