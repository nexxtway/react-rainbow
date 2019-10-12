import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_2 } from '../../../styles/colors';

const StyledBackDrop = styled.div`
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${COLOR_GRAY_TRANSPARENT_2};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transition: opacity 0.3s linear, z-index 0.3s linear;
    ${props =>
        props.isOpen &&
        `
            visibility: visible;
            z-index: 1000000;
            opacity: 1;
        `};
`;

export default StyledBackDrop;
