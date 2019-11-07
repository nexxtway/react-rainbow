import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledActionLabel = styled.span`
    font-size: 0.9375rem;
    color: ${COLOR_BRAND};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default StyledActionLabel;
