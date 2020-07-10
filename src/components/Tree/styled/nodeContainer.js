import styled from 'styled-components';

const NodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props =>
        props.isSelected &&
        `
        background-color: #e4e4e4;
    `}
`;

export default NodeContainer;
