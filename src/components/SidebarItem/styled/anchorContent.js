import styled from 'styled-components';

const StyledAnchorContent = styled.a`
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 0;
    cursor: pointer;
    flex-direction: column;
    box-sizing: border-box;
    color: transparent;

    :hover,
    :active,
    :focus {
        text-decoration: none;
        outline: 0;
        color: transparent;
    }
`;

export default StyledAnchorContent;
