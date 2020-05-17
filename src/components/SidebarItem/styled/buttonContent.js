import styled from 'styled-components';

const StyledButtonContent = styled.button`
    border: none;
    border-radius: 0;
    outline: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
