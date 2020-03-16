import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ChildrenContainer = attachThemeAttrs(styled.div)`
    margin-left: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    border-left: 1px solid ${props => props.palette.border.divider};
    padding-left: 10px;

    ${props =>
        props.icon &&
        `
        padding-left: 20px;
    `};
    ${props =>
        props.isChecked &&
        `
        padding-left: 20px;
    `};
`;

export default ChildrenContainer;
