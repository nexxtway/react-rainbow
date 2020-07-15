import styled from 'styled-components';

const ItemContainerLi = styled.li`
    box-sizing: border-box;
    &:focus {
        outline: 0;
    }
    &:focus > div {
        background-color: ${props => props.theme.rainbow.palette.action.active};
    }
`;

export default ItemContainerLi;
