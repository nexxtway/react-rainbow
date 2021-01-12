import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledThead = attachThemeAttrs(styled.thead)`
    ${props =>
        props.theme.hideTableHeader &&
        `
        visibility: hidden;
    `};
    ${props =>
        props.theme.variant === 'listview' &&
        props.theme.isEmpty &&
        `
            &::after {
                content: '';
                height: 1px;
                width: 100%;
                left: 0;
                position: absolute;
                background-color: ${props.palette.border.divider};
                border-radius: 100px;
            }
    `};
`;

export default StyledThead;
