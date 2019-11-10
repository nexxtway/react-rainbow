import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { COLOR_BRAND } from '../../../styles/colors';
import { SHADOW_OUTLINE_2 } from '../../../styles/shadows';

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

    :focus {
        border: 1px solid ${COLOR_BRAND};
        box-shadow: ${SHADOW_OUTLINE_2};
        outline: 0;
    }
`;

export default StyledAnchor;
