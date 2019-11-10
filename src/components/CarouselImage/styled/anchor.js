import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledAnchor = styled.a`
    display: block;
    border-radius: ${BORDER_RADIUS_1};
    overflow: hidden;
    cursor: pointer;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    height: 100%;

    :hover {
        text-decoration: none;
        color: inherit;
    }
`;

export default StyledAnchor;
