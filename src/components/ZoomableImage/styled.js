import styled from 'styled-components';
import { ZINDEX_OVERLAY } from '../../styles/zIndex';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';

export const StyledImage = styled.img`
    cursor: zoom-in;
    visibility: ${props => (props.isOpen ? 'hidden' : 'visible')};
`;

export const StyledImageContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${ZINDEX_OVERLAY};
`;

export const StyledBackdrop = attachThemeAttrs(styled.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.palette.background.main};
    opacity: 0;
    transition: opacity 300ms ease 0s;

    ${props =>
        props.isCentered &&
        `
        opacity: 1;
        `}
`;

export const StyledCenteredImage = styled.img`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    transition: transform 300ms ease 0s;
    transform: translate3d(0, 0, 0) scale(1);
    will-change: transform;
    transform-origin: center center;
    cursor: zoom-out;

    ${props =>
        props.isCentered &&
        props.transform &&
        `
        transform: translate3d(${props.transform.translateX}px, ${
            props.transform.translateY
        }px, 0px) scale(${props.transform.scale});
        `}
`;
