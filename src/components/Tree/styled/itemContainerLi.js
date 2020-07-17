import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ItemContainerLi = attachThemeAttrs(styled.li)`
    box-sizing: border-box;

    &:focus {
        outline: 0;
    }

    &:focus > div {
        background-color: ${props => props.palette.action.active};
    }
`;

export default ItemContainerLi;
