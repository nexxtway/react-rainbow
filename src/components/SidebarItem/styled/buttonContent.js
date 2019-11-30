import styled from 'styled-components';

const StyledButtonContent = styled.button`
    border: none;
    padding: 0;
    outline: 0;
    background-color: transparent;
    transition: color 0.1s linear;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 0;
    cursor: pointer;
    flex-direction: column;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

export default StyledButtonContent;
