import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIndicator = attachThemeAttrs(styled.span)`
    height: 100%;
    right: 1.2rem;
    position: absolute;
    line-height: 1;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 45%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        color: ${props => props.palette.brand.main};
        box-sizing: border-box;
    }

    ${props =>
        props.disabled &&
        `
            &::after {
                color: ${props.palette.text.disabled};
            }
    `}

    ${props =>
        props.error &&
        `
            ::after {
                color: ${props.palette.error.main};
            }
    `}
`;

export default StyledIndicator;
