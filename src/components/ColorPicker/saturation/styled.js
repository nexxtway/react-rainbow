import styled, { css } from 'styled-components';

const StyledAbsolute = css`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;

export const StyledColor = styled.div`
    ${StyledAbsolute}
    background: ${props => props.hslColor};
`;

export const StyledWhite = styled.div`
    ${StyledAbsolute}
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
`;

export const StyledBlack = styled.div`
    ${StyledAbsolute}
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
`;

export const StyledPointer = styled.div`
    position: absolute;
    top: ${props => props.$top}%;
    left: ${props => props.$left}%;
    cursor: default;
`;

export const StyledCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;
    transform: translate(-6px, -6px);
`;
