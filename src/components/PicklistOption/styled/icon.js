import styled from 'styled-components';
import { COLOR_WHITE } from '../../../styles/colors';

const StyledIcon = styled.span`
    width: 1rem;
    height: 1rem;
    line-height: 1;
    fill: ${COLOR_WHITE};
    ${props =>
        props.position === 'left' &&
        `
            margin-right: 0.75rem;
            flex-shrink: 0;
        `};
    ${props =>
        props.position === 'right' &&
        `
            margin-left: 0.75rem;
            flex-shrink: 0;
        `};
`;

export default StyledIcon;
