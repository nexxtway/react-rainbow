import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_1 } from '../../../styles/colors';

const StyledContainer = styled.div`
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    :hover {
        background-color: ${COLOR_GRAY_TRANSPARENT_1};
    }

    .rainbow-vertical-item_action {
        padding: 0.65rem 1rem 0.65rem 3rem;
    }

    ${props =>
        props.isExpanded &&
        `
            background-color: ${COLOR_GRAY_TRANSPARENT_1};
            box-shadow: inset 0 0 2px 0 #e3e5ed;
            padding-bottom: 16px;
        `};
`;

export default StyledContainer;
