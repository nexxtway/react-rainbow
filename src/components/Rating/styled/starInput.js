import styled from 'styled-components';

const StyledStartInput = styled.input`
    box-sizing: border-box;
    position: absolute;
    opacity: 0;
    width: 22px;
    height: 22px;
    cursor: pointer;
    color: inherit;
    font: inherit;
    margin: 2px 0;
    line-height: normal;
    padding: 0;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :-ms-input-placeholder {
        color: #706e6b;
        font-weight: 400;
        font-size: 0.8125rem;
    }
`;

export default StyledStartInput;
