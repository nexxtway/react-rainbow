import styled from 'styled-components';

const StyledContainer = styled.li`
    position: relative;

    :nth-child(1) > a::after {
        background-color: transparent;
    }

    @media (max-width: 600px) {
        width: 0;

        a::after {
            background-color: transparent;
        }
    }

    ${props =>
        props.fullWidth &&
        `
            flex-grow: 1;
        `};
    ${props =>
        props.isActive &&
        `
            @media (max-width: 600px) {
                width: 100%;
            }
        `};
`;

export default StyledContainer;
