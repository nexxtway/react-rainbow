import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayContainer = attachThemeAttrs(styled.td)`
    min-width: 120px;
    height: 100px;
    padding: 0;
    box-sizing: border-box;
    border: solid 1px ${props => props.palette.border.divider};
`;

export default StyledDayContainer;
