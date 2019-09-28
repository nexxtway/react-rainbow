import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 20px 48px 0 32px;

    @media (max-width: 600px) {
        padding-top: 10px;
    }
`;

export default StyledHeader;
