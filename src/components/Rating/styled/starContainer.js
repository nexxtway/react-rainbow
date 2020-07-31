import styled from 'styled-components';

const StyledStartContainer = styled.span`
    line-height: inherit;
    height: inherit;

    :not(:last-child) {
        margin-right: 0.25rem;
    }
    display: inline-block;
    transition: transform 300ms ease-in-out;
    &:hover {
        transform: scale(1.5);
    }
`;

export default StyledStartContainer;
