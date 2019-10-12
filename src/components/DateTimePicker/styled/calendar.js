import styled from 'styled-components';
import Calendar from './../../Calendar';

const StyledCalendar = styled(Calendar)`
    width: 340px;
    height: 370px;

    @media (max-width: 800px) {
        height: 335px;
    }
`;

export default StyledCalendar;
