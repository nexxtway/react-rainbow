import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledScrollableX = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.secondary};
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    overflow-x: auto;
    padding-top: 44px;
    position: relative;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid ${props => props.palette.border.divider};
`;

export default StyledScrollableX;
