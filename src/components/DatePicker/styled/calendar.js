import styled from 'styled-components';
import Calendar from '../../Calendar';

const StyledCalendar = styled(Calendar)`
    width: 420px;
    height: 400px;
    padding: 0 8px;
    margin: 20px 0 0 0;

    @media (max-width: 600px) {
        width: 100%;
        padding: 0;
    }
`;

export default StyledCalendar;
