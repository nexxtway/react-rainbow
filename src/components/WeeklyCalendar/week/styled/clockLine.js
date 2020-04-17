import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledClockLine = attachThemeAttrs(styled.div)`
    position: absolute;
    width: 100%;
    z-index: 504;
`;

export default StyledClockLine;
