import styled from 'styled-components';
import { COLOR_GRAY_1 } from '../../../../styles/colors';

const StyledItem = styled.div`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 48px;
    padding: 0 1.15rem 0 1.15rem;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    ${props =>
        props.isActive &&
        `
            background-color: ${COLOR_GRAY_1};
    `}
`;

export default StyledItem;
