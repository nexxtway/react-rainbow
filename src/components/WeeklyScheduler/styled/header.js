import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeader = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    border-bottom: 1px solid ${props => props.palette.border.divider};
`;
export default StyledHeader;
