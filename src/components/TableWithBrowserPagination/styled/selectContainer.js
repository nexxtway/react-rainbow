import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSelectContainer = attachThemeAttrs(styled.div)`
    flex-shrink: 0;
    position: relative;
    margin: 0 12px;
    height: 100%;

    &::after {
        content: '';
        position: absolute;
        display: block;
        right: 12px;
        bottom: 42.5%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        vertical-align: top;
        color: ${props => props.palette.brand.main};
    }
`;

export default StyledSelectContainer;
