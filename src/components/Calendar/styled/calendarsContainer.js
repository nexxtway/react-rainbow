import styled from 'styled-components';

const StyledCalendarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: start;

    & > div {
        flex: 1;
    }

    & > div:nth-child(1) {
        margin-right: 2rem;
    }

    & > div:nth-child(2) {
        margin-left: 2rem;
    }
`;

export default StyledCalendarContainer;
