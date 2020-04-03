import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHours = attachThemeAttrs(styled.div)`
    flex: none;
    color: ${props => props.palette.text.main};
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 65px;
`;

export default StyledHours;
