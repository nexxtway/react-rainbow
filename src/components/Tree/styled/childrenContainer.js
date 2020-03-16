import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ChildrenContainer = attachThemeAttrs(styled.div)`
    margin-left: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    border-left: 1px solid ${props => props.palette.border.divider};
    padding-left: 20px;

    ${props =>
        props.icon &&
        `
        padding-left: 46px;
    `};
    ${props =>
        props.isChecked === false &&
        `
        padding-left: 46px;
    `};
`;

export default ChildrenContainer;
