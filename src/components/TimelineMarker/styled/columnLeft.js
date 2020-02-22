import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledColumnLeft = attachThemeAttrs(styled.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    ::before {
        content: '';
        background-color: ${props => props.palette.background.highlight};
        height: 100%;
        width: 1px;
        position: absolute;
        right: 50%;
        left: 50%;
    }
`;

export default StyledColumnLeft;
