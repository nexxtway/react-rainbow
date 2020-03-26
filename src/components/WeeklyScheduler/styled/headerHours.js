import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderHours = attachThemeAttrs(styled.div)`
    flex:none;
    text-align: center;
    color: ${props => props.palette.text.main};
    padding: 0;
    min-width: 60px;
`;

export default StyledHeaderHours;
