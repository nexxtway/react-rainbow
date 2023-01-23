import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

export const StyledCVSFieldContainer = attachThemeAttrs(styled.span)`
    align-items: center;
    display: flex;
    color: ${props => props.palette.text.header};
    font-size: 14px;
    font-style: italic;
`;

export const CellContainer = styled.div`
    align-items: center;
    display: flex;
    padding: 3px 24px 0 8px;
    justify-content: space-between;
`;
