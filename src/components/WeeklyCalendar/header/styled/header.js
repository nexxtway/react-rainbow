import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledHeader = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    border: 1px solid ${props => props.palette.border.divider};

    > div:last-child {
        overflow: scroll;
        visibility: hidden;
        flex: none;
    }
`;
export default StyledHeader;
