import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    height: 960px;
    min-width: 642px;
`;

export default StyledContainer;
