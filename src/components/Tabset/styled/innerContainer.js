import styled from 'styled-components';

const StyledInnerContainer = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    ${props =>
        props.fullWidth &&
        `
            justify-content: space-between;
        `};
`;

export default StyledInnerContainer;
