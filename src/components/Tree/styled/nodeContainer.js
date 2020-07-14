import styled from 'styled-components';

const NodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.rainbow.palette.action.hover};
    }
    > button {
        visibility: hidden;
    }
    ${props =>
        props.isSelected &&
        `
        background-color: ${props.theme.rainbow.palette.action.active};
    `};
`;

export default NodeContainer;
