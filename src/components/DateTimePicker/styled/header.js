import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    margin: 4px 48px 8px 12px;

    @media (max-width: 800px) {
        margin: 0 48px 0 8px;
    }
`;

export default StyledHeader;
