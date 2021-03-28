import styled from 'styled-components';

const StyledContainer = styled.div`
    .task-list-item {
        list-style: none;
        margin-left: 0;
    }

    ${props =>
        props.variant === 'inline' &&
        `
        display: inline;

        > div {
            display: inline;
        }
    `}
`;

export default StyledContainer;
