import styled from 'styled-components';

const StyledIndicator = styled.span`
    height: 100%;
    line-height: 1;
    z-index: 2;
    margin-left: 5px;
    margin-right: 5px;

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
