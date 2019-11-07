import styled from 'styled-components';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { COLOR_GRAY_3 } from '../../../styles/colors';

const StyledDescription = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    line-height: 1rem;
    color: ${COLOR_GRAY_3};
    text-align: left;
    width: 100%;
    transition: all 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    ${props =>
        props.isExpanded &&
        `
            opacity: 0;
        `};
`;

export default StyledDescription;
