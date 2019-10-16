import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_2, COLOR_ERROR } from '../../../styles/colors';

const StyledInnerContainer = styled.div`
    position: relative;

    ::after {
        content: '';
        position: absolute;
        display: block;
        right: 1rem;
        bottom: 45%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        vertical-align: top;
        color: ${COLOR_BRAND};
    }

    &[disabled]::after {
        color: ${COLOR_GRAY_2};
    }

    ${props =>
        props.error &&
        `
            ::after {
                color: ${COLOR_ERROR};
            }
        `};
`;

export default StyledInnerContainer;
