import styled from 'styled-components';

const StyledHeader = styled.li`
    padding: 0 0.75rem;
    height: 45px;
    line-height: 45px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;

    &:hover {
        cursor: default;
    }
`;

export default StyledHeader;
