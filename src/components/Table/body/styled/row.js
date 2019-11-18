import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_1, COLOR_GRAY_2 } from '../../../../styles/colors';

const StyledRow = styled.tr`
    box-shadow: 0 1px 0 0 ${COLOR_GRAY_2};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${COLOR_GRAY_TRANSPARENT_1};
        box-shadow: 0 1px 1px 0 ${COLOR_GRAY_2}, 0 0 1px 0 ${COLOR_GRAY_2};
    }

    ${props =>
        props.isSelected &&
        `
            background-color: ${COLOR_GRAY_TRANSPARENT_1};
        `};
`;

export default StyledRow;
