import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderDay = attachThemeAttrs(styled.div)`
    position: relative;
    flex: 1 0 14%;
    text-align: center;
    color: ${props => props.palette.brand.main};
    height: 40px;
    padding: 0;
    box-sizing: border-box;

    > div {
        border-left: 1px solid ${props => props.palette.border.divider};
        bottom: 0;
        height: 20px;
        margin-left: -1px;
        position: absolute;
    }
`;

export default StyledHeaderDay;
