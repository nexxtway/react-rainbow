import styled from 'styled-components';

const StyledCheckboxContainer = styled.div`
    align-items: center;
    display: flex;
    padding: 0 15px;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${props =>
        props.theme.variant === 'listview' &&
        `
        padding: 0 10px;
    `}
`;

export default StyledCheckboxContainer;
