import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledFlagContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex: 0 0 auto;
    padding-right: 12px;
    border-right: 1px solid ${props => props.palette.text.header};
    ${props =>
        props.readOnly &&
        `
        border-right: 1px solid transparent;
        padding-right: 8px;
        margin-top: -1px;
    `};

    ${props =>
        props.disabled &&
        `
        padding-right: 12px;
        margin-top: 0;
        border-right: 1px solid ${props.palette.border.disabled};
    `};
`;

export default StyledFlagContainer;
