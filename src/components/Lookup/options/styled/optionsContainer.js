import styled from 'styled-components';

const StyledOptionsContainer = styled.ul`
    overflow-y: auto;
    box-sizing: border-box;
    ${props =>
        props.as === 'div' &&
        `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px 16px;
            letter-spacing: normal;
            text-align: center;
    `}
    ${props =>
        props.as !== 'div' &&
        `
            margin: 0;
            list-style: none;
    `}
`;

export default StyledOptionsContainer;
