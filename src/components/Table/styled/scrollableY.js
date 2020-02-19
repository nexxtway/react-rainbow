import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledScrollableY = attachThemeAttrs(styled.div)`
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
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
