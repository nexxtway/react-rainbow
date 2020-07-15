import styled from 'styled-components';

const NodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: ${props => `-${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1}px`};
    padding-left: ${props =>
        props.hasChildren
            ? `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1}px`
            : `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + 28}px`};
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.rainbow.palette.action.hover};
    }
    ${props =>
        props.isSelected &&
        `
        background-color: ${props.theme.rainbow.palette.action.active};
    `};
`;

export default NodeContainer;
