import styled from 'styled-components';
import { COLOR_SUCCESS, COLOR_BRAND } from '../../../styles/colors';

const StyledBar = styled.span`
    display: block;
    background: ${COLOR_BRAND};
    height: 100%;
    border-radius: 1rem;
    ${props =>
        props.variant === 'success' &&
        `
            background: ${COLOR_SUCCESS};
        `};
`;

export default StyledBar;
