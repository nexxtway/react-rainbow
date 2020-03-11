import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledScrollShadow = attachThemeAttrs(styled.div)`
    width: inherit;
    height: 1px;
    position: absolute;
    top: 42px;

    ${props =>
        props.hasScroll &&
        `
        box-shadow: 0 1.5px 2.5px 0 ${props.palette.text.header};
    `}
`;

export default StyledScrollShadow;
