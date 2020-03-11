import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledModalContainer = attachThemeAttrs(styled.section)`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 55%;
    min-width: 18rem;
    max-height: 80vh;
    min-height: 4rem;
    background-color: ${props => props.palette.background.main};
    color: ${props => props.palette.text.main};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${props => props.shadows.shadow_2};
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: normal;
    position: relative;

    &:focus {
        outline: 0;
    }

    ${props =>
        props.isOpen &&
        `
            animation: slide-up-in 0.2s linear;
            opacity: 1;
            transform: scale(1, 1) translateY(0);
        `};
    ${props =>
        !props.isOpen &&
        `
            animation: slide-down-out 0.2s linear;
            opacity: 0;
            transform: translateY(50%);
        `};
    ${props => props.size === 'large' && 'width: 85%;'}
    ${props => props.size === 'medium' && 'width: 70%;'}

    @media (min-width: 1240px) {
        width: 520px;
        ${props => props.size === 'large' && 'width: 920px;'}
        ${props => props.size === 'medium' && 'width: 720px;'}
    }

    @media (max-width: 800px) {
        width: 95%;
    }

    @keyframes slide-up-in {
        0% {
            opacity: 0;
            transform: scale(0.8, 0.8) translateY(70%);
        }

        100% {
            opacity: 1;
            transform: scale(1, 1) translateY(0);
        }
    }

    @keyframes slide-down-out {
        0% {
            opacity: 1;
            transform: translateY(0);
        }

        100% {
            opacity: 0;
            transform: translateY(50%);
        }
    }
`;

export default StyledModalContainer;
