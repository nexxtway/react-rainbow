import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledGuideline = styled.span.attrs(props => {
    const { brand, success } = getTheme(props).palette;
    const brandMainColor = brand.main;
    const successMainColor = success.main;

    return {
        brandMainColor,
        successMainColor,
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
        background-color: ${props => props.successMainColor};
    }
`;

export default StyledGuideline;
