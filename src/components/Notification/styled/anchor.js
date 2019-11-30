import styled from 'styled-components';

const StyledAnchor = styled.a`
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;
    display: flex;

    :hover,
    :focus {
        text-decoration: none;
    }

    :active,
    :hover {
        outline: 0;
    }
`;

export default StyledAnchor;
