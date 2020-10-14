import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledLoadingCell = attachThemeAttrs(styled.div)`
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px 0 8px;
    box-sizing: border-box;
`;

export default StyledLoadingCell;
