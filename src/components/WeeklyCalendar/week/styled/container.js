import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    height: 1200px;
    min-width: 677px;
`;

export default StyledContainer;
