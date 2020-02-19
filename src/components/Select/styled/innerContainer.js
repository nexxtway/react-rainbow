import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInnerContainer = attachThemeAttrs(styled.div)`
    position: relative;

    ::after {
        content: '';
        position: absolute;
        display: block;
        right: 1rem;
        bottom: 45%;
        pointer-events: none;
        width: 0.5rem;
        height: 0.5rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        vertical-align: top;
        color: ${props => props.palette.brand.main};
        box-sizing: border-box;
    }

    &[disabled]::after {
        color: ${props => props.palette.background.disabled};
    }

    ${props =>
        props.error &&
        `
            ::after {
                color: ${props.palette.error.main};
            }
        `};
`;

export default StyledInnerContainer;
