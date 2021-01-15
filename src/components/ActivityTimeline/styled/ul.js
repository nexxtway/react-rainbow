import styled from 'styled-components';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    ${props =>
        props.variant === 'accordion' &&
        `
        padding-left: 1.25rem;
        `};
`;

export default StyledUl;
