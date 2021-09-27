import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledWrapper = attachThemeAttrs(styled.div)`
    outline: none;
    position: absolute;
    top: 0;
    left: auto;
    height: 44px;
    background-color: ${props => props.palette.background.highlight};
    box-sizing: border-box;

    ${props =>
        props.theme.variant === 'listview' &&
        `
            background-color: transparent;
        `};
`;

export default StyledWrapper;
