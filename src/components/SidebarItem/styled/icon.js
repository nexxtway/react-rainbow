import styled from 'styled-components';

const StyledIcon = styled.div`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;

    :hover,
    :active,
    :focus {
        background-color: #e3e5ed;
        outline: 0;
    }

    ${props =>
        props.isSelected &&
        `
            background-color: #e3e5ed;
            outline: 0;
        `};
`;

export default StyledIcon;
