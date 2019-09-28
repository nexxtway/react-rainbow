import styled from 'styled-components';

const StyledResponsiveContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    @media (max-width: 600px) {
        padding: 0.5rem;
    }
`;

export default StyledResponsiveContainer;
