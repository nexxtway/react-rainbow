import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledTitle = styled.h2`
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1.25rem;
    line-height: 1.5rem;
    font-size: 0.9375rem;
    font-weight: inherit;
    color: ${COLOR_BRAND};
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default StyledTitle;
