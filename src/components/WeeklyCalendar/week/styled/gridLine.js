import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledGridLine = attachThemeAttrs(styled.div)`
    height: 40px;

    ::after {
        content: '';
        border-bottom: 1px solid ${props => props.palette.border.divider};
        position: absolute;
        width: 100%;
        margin-top: -1px;
        z-index: 0;
        pointer-events: none;
    }
`;

export default StyledGridLine;
