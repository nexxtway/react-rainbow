import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledLi = styled.li`
    border-radius: ${BORDER_RADIUS_1};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    ${props =>
        props.shouldShow &&
        props.direction === 'right-to-left' &&
        `
            transform: translateX(0) !important;
            position: relative;
            animation: slide-in-right-to-left;
            animation-timing-function: linear;
            animation-duration: 550ms;

            @keyframes slide-in-right-to-left {
                0% {
                    transform: translateX(100%);
                }
            
                100% {
                    transform: translateX(0);
                }
            }
        `};
    ${props =>
        props.shouldShow &&
        props.direction === 'left-to-right' &&
        `
            transform: translateX(0) !important;
            position: relative;
            animation: slide-in-left-to-right;
            animation-timing-function: linear;
            animation-duration: 550ms;

            @keyframes slide-in-left-to-right {
                0% {
                    transform: translateX(-100%);
                }
            
                100% {
                    transform: translateX(0);
                }
            }
        `};
    ${props =>
        props.shouldHide &&
        props.direction === 'right-to-left' &&
        `
            transform: translateX(-100%) !important;
            animation: slide-out-right-to-left;
            animation-timing-function: linear;
            animation-duration: 550ms;

            @keyframes slide-out-right-to-left {
                0% {
                    transform: translateX(0);
                }
            
                100% {
                    transform: translateX(-100%);
                }
            }
        `};
    ${props =>
        props.shouldHide &&
        props.direction === 'left-to-right' &&
        `
            transform: translateX(100%) !important;
            animation: slide-out-left-to-right;
            animation-timing-function: linear;
            animation-duration: 550ms;

            @keyframes slide-out-left-to-right {
                0% {
                    transform: translateX(0);
                }
            
                100% {
                    transform: translateX(100%);
                }
            }
        `};
    ${props =>
        props.shouldBeActive &&
        `
            transform: translateX(0);
            position: relative;
        `};
`;

export default StyledLi;
