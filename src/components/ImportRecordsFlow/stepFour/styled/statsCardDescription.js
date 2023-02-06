import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledStatsCardDescription = attachThemeAttrs(styled.h2)`
    font-size: 14px;
    line-height: 1.2;
    color: ${props => props.palette.text.label};
    padding: 0;
    font-weight: inherit;
`;

export default StyledStatsCardDescription;
