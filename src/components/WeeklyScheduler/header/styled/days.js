import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDays = attachThemeAttrs(styled.div)`
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex: 1 1 auto;

    > div:first-child {
        width: 9px;
        min-width: 9px;
        height: 100%;
        border-right: 1px solid ${props => props.palette.border.divider};
    }
    > div:last-child {
        border-right: none;
    }
`;

export default StyledDays;
