import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledFileCardDescription = attachThemeAttrs(styled.h2)`
    font-size: 14px;
    line-height: 1.2;
    color: ${props => props.palette.text.label};
    margin: 8px 0 0 0;
    padding: 0;
    font-weight: inherit;
`;

export default StyledFileCardDescription;
