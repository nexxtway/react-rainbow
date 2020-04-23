import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContentDay = attachThemeAttrs(styled.div)`
    ${props =>
        props.isToday &&
        `
            padding: 0px 11px;
            border: 1px solid ${props.palette.brand.main};
            border-radius: 12px;
        `};
`;

export default StyledContentDay;
