import styled from 'styled-components';

const StyledIndicator = styled.span`
    z-index: 2;
    margin-top: -4px;
    margin-left: 8px;
    flex: 0 0 auto;

    &::after {
        content: '';
        pointer-events: none;
        display: inline-block;
        bottom: 45%;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        box-sizing: border-box;
    }
`;

export default StyledIndicator;
