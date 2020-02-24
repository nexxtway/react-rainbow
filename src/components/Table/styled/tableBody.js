import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTableBody = attachThemeAttrs(styled.tbody)`
    background-color: ${props => props.palette.background.main};
`;

export default StyledTableBody;
