import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledResizeBar = styled.span.attrs(props => {
    const brand = getTheme(props).palette;
    const brandMainColor = brand.main;
    const brandDarkColor = brand.dark;

    return {
        brandMainColor,
        brandDarkColor,
    };
})`
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
        background-color: ${props => props.brandMainColor} !important;

        & span {
            background-color: ${props => props.brandMainColor};
        }
    }

    :active {
        background-color: ${props => props.brandDarkColor} !important;

        & span {
            background-color: ${props => props.brandDarkColor};
        }
    }
`;

export default StyledResizeBar;
