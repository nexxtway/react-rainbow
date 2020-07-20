import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ItemContainerLi = attachThemeAttrs(styled.li)`
    box-sizing: border-box;

    &:focus {
        outline: 0;
    }

    &:focus > div {
        box-shadow: ${props => props.shadows.brand};
    }
`;

export default ItemContainerLi;
