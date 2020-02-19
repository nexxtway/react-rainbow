import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIcon = attachThemeAttrs(styled.span)`
    width: 2.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    line-height: 2.5rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.error &&
        `
            fill: ${props.palette.error.main};
            color: ${props.palette.error.main};
    `}
`;

export default StyledIcon;
