import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIcon = attachThemeAttrs(styled.span)`
    width: 1rem;
    height: 1rem;
    line-height: 1;
    fill: ${props => props.palette.background.main};
    ${props =>
        props.position === 'left' &&
        `
            margin-right: 0.75rem;
            flex-shrink: 0;
        `};
    ${props =>
        props.position === 'right' &&
        `
            margin-left: 0.75rem;
            flex-shrink: 0;
        `};
`;

export default StyledIcon;
