import styled from 'styled-components';
import { COLOR_BRAND, COLOR_BRAND_ACTIVE } from '../../../../styles/colors';

const StyledResizeBar = styled.span`
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
        background-color: ${COLOR_BRAND} !important;

        & span {
            background-color: ${COLOR_BRAND};
        }
    }

    :active {
        background-color: ${COLOR_BRAND_ACTIVE} !important;

        & span {
            background-color: ${COLOR_BRAND_ACTIVE};
        }
    }
`;

export default StyledResizeBar;
