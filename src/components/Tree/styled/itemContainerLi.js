import styled from 'styled-components';

const ItemContainerLi = styled.li`
    box-sizing: border-box;
    margin-left: 28px;
    ${props =>
        props.hasChildren &&
        `
        margin-left: 0px;
    `};
`;

export default ItemContainerLi;
