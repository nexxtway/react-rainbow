import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledFlagContainer = attachThemeAttrs(styled.div)`
    display: flex;
    padding-right: 12px;
    border-right: 1px solid ${props => props.palette.text.header};
    ${props =>
        props.readOnly &&
        `
        border-right: 1px solid transparent;
        padding-right: 8px;
    `};

    ${props =>
        props.disabled &&
        `
        border-right: 1px solid ${props.palette.border.disabled};
    `};
`;

export default StyledFlagContainer;
