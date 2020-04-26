import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitleHour = attachThemeAttrs(styled.div)`
    position: relative;
    top: -7px;
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

export default StyledTitleHour;
