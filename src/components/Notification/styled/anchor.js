import styled from 'styled-components';

const StyledAnchor = styled.a`
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;
    display: flex;

    a:hover,
    a:focus {
        text-decoration: underline;
        color: #005fb2;
    }

    a:active {
        color: #005fb2;
    }

    a:active,
    a:hover {
        outline: 0;
    }
`;

export default StyledAnchor;
