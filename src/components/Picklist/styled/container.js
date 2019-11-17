import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
        outline: 0;
    }

    ${props =>
        props.isReadOnly &&
        `
            display: flex;
    `}
`;

export default StyledContainer;
