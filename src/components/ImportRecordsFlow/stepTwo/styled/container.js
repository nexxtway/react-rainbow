import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Table from '../../../Table';

export const StyledContainer = attachThemeAttrs(styled.div)`
    border-radius: 4px;
    border: dashed 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
    height: 260px;
    margin: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props =>
        props.isDragOver &&
        `
            background-color: ${props.palette.action.active};
            border: dashed 1px ${props.palette.brand.main};
        `};
`;

export const TableContainer = styled.div`
    margin-left: -32px;
    margin-right: -32px;
    display: flex;
    overflow: auto;
    box-sizing: border-box;
`;

export const StyledTable = styled(Table)`
    margin: 0 48px;
`;
