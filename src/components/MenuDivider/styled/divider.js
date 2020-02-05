import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDivider = attachThemeAttrs(styled.li)`
    border-top: solid 1px ${props => props.palette.border.divider};
    box-sizing: border-box;
    ${props =>
        props.variant === 'space' &&
        `
            margin-top: 0.5rem;
            padding-top: 0.5rem;
        `};
`;

export default StyledDivider;
