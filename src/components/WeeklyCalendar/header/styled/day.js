import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDay = attachThemeAttrs(styled.div)`
    flex: 1 0 auto;
    border-right: 1px solid ${props => props.palette.border.divider};
    position: relative;
    width: 90px;
    min-width: 90px;
    height: 100%;
    color: ${props => props.palette.brand.main};
    padding: 3px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default StyledDay;
