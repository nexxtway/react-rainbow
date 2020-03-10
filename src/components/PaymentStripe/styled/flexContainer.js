import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;

    > * + * {
        margin-left: 10px;
    }

    @media (max-width: 737px) {
        flex-direction: column;

        > * {
            margin-left: 0;
        }
    }
`;

export default FlexContainer;
