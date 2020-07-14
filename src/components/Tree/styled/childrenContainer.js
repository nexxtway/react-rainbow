import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ChildrenContainerUl = attachThemeAttrs(styled.ul)`
    margin-left: 10px;
    // margin-top: 2px;
    // margin-bottom: 2px;
    border-left: 1px solid ${props => props.palette.border.divider};
    padding-left: 10px;
`;

export default ChildrenContainerUl;
