import styled from 'styled-components';

const StyledCheckboxWrapper = styled.div`
    align-items: center;
    display: flex;
    padding: 10px 15px;
    border: 1px solid transparent;
    ${props =>
        props.theme.variant === 'listview' &&
        `
        padding: 10px 10px;
    `}
`;

export default StyledCheckboxWrapper;
