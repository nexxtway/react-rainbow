import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTable = attachThemeAttrs(styled.table)`
    table-layout: fixed;
    border-collapse: separate;
    background-color: ${props => props.palette.background.main};
    border-spacing: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    ${props =>
        props.theme.variant === 'listview' &&
        `
            background-color: transparent;
        `};
`;

export default StyledTable;
