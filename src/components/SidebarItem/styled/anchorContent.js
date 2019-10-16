import styled from 'styled-components';

const StyledAnchorContent = styled.a`
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 0;
    cursor: pointer;
    flex-direction: column;

    :hover,
    :active,
    :focus {
        text-decoration: none;
        outline: 0;
    }
`;

export default StyledAnchorContent;
