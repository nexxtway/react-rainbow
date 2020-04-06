import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex: 1 1 auto;
    height: 1200px;
    min-width: 579px;

    > div:nth-child(2) {
        width: 11px;
        min-width: 11px;
        height: 100%;
        border-right: 1px solid ${props => props.palette.border.divider};
    }
`;

export default StyledContainer;
