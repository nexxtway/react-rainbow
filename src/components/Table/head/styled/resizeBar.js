import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledResizeBar = attachThemeAttrs(styled.span)`
    background-color: transparent;
    border-radius: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 3px;
    z-index: 1000;
    cursor: col-resize;

    :hover {
        background-color: ${props => props.palette.brand.main} !important;

        & span {
            background-color: ${props => props.palette.brand.main};
        }
    }

    :active {
        background-color: ${props => props.palette.brand.dark} !important;

        & span {
            background-color: ${props => props.palette.brand.dark};
        }
    }
`;

export default StyledResizeBar;
