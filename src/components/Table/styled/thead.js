import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledThead = attachThemeAttrs(styled.thead)`
    ${props =>
        props.theme.hideTableHeader &&
        `
        visibility: hidden;
    `};
`;

export default StyledThead;
