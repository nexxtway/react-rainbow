import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledFileCardTitle = attachThemeAttrs(styled.h1)`
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
    color: ${props => props.palette.text.main};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    padding: 0;
`;

export default StyledFileCardTitle;
