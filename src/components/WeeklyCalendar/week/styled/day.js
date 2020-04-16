import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDay = attachThemeAttrs(styled.div)`
    flex: 1 0 auto;
    border-right: 1px solid ${props => props.palette.border.divider};
    position: relative;
    height: 100%;
    width: 100px;
    min-width: 100px;

    :last-child {
        border-right: none;
    }
`;

export default StyledDay;
