import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex: 1 1 auto;
    height: 1200px;

    > div:first-child {
        width: 9px;
        min-width: 9px;
        border-right: 1px solid ${props => props.palette.border.divider};
    }
`;

export default StyledContainer;
