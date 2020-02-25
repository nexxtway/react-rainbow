import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledGuideline = attachThemeAttrs(styled.span)`
    background-color: transparent;
    height: 100vh;
    position: absolute;
    right: 0;
    width: 1px;

    :hover {
        background-color: ${props => props.palette.brand.main};
    }

    :active {
        background-color: ${props => props.palette.brand.dark};
    }
`;

export default StyledGuideline;
