import styled from 'styled-components';

const ItemContainerLi = styled.li`
    box-sizing: border-box;
    margin-left: 28px;
    ${props =>
        props.hasChildren &&
        `
        margin-left: 0px;
    `};

    &:focus {
        outline: 0;
    }

    &:focus > div {
        border-left: #01b6f5 solid 4px;
    }
`;

export default ItemContainerLi;
