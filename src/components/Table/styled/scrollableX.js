import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledScrollableX = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.action.active};
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    overflow-x: auto;
    padding-top: 44px;
    position: relative;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid ${props => props.palette.border.divider};

    ${props =>
        props.theme.hideTableHeader &&
        `
        padding-top: 0;
        border-top: none;
    `};

    ${props =>
        props.theme.variant === 'listview' &&
        `
            border-top: none;
            background-color: transparent;
    `};
`;

export default StyledScrollableX;
