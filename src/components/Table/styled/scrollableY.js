import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledScrollableY = attachThemeAttrs(styled.div)`
padding: 0 0 40px 0;
height: 100%;
overflow: hidden;
overflow-y: scroll;
position:relative;
-webkit-overflow-scrolling: touch;
    border-top: 1px solid ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    ${props =>
        props.isEmpty &&
        !props.isLoading &&
        `
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
        `};
`;

export default StyledScrollableY;
