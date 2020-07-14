import styled from 'styled-components';

const ItemContainerLi = styled.li`
    box-sizing: border-box;
    &:focus {
        outline: 0;
    }
    &:focus > div {
        background-color: ${props => props.theme.rainbow.palette.action.active};
    }
    ${props =>
        props.hasChildren &&
        `
        > div > button {
            visibility: visible;
        }
    `};
    > div {
        margin-left: ${props =>
            props['aria-level'] > 1
                ? `-${(props['aria-level'] - 1) * 20 + props['aria-level'] - 1}px`
                : '0'};
        padding-left: ${props =>
            props['aria-level'] > 1
                ? `${(props['aria-level'] - 1) * 20 + props['aria-level'] - 1}px`
                : '0'};
    }
`;

export default ItemContainerLi;
