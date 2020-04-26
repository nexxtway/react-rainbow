import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHours = attachThemeAttrs(styled.div)`
    flex: none;
    color: ${props => props.palette.text.main};
    height: auto;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 65px;
    overflow-y: hidden;
    overflow-x: hidden;
`;

export default StyledHours;
