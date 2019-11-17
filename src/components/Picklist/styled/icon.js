import styled from 'styled-components';
import { COLOR_ERROR } from '../../../styles/colors';

const StyledIcon = styled.span`
    width: 2.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    line-height: 2.5rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.error &&
        `
            fill: ${COLOR_ERROR};
            color: ${COLOR_ERROR};
    `}
`;

export default StyledIcon;
