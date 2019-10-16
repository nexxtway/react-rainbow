import styled from 'styled-components';

const StyledResponsiveContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;

    @media (max-width: 800px) {
        padding: 26px 0 8px 0;
        justify-content: center;
        align-items: center;
    }
`;

export default StyledResponsiveContainer;
