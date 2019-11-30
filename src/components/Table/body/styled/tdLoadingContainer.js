import styled from 'styled-components';

const StyledTdLoadingContainer = styled.td`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-of-type > div {
        padding: 0 12px 0 16px;
    }

    :last-of-type > div {
        padding: 0 12px;
    }
`;

export default StyledTdLoadingContainer;
