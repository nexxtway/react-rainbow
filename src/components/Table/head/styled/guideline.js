import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledGuideline = styled.span.attrs(props => {
    const brand = getTheme(props).palette.brand;
    const { main: brandMainColor, dark: brandDarkColor } = brand;

    return {
        brandMainColor,
        brandDarkColor,
    };
})`
    background-color: transparent;
    height: 100vh;
    position: absolute;
    right: 0;
    width: 1px;

    :hover {
        background-color: ${props => props.brandMainColor};
    }

    :active {
        background-color: ${props => props.brandDarkColor};
    }
`;

export default StyledGuideline;
