import styled from 'styled-components';
import TimeSelect from '../../TimePicker/timeSelect';

const StyledTimeSelect = styled(TimeSelect)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 60px;

    @media (max-width: 800px) {
        margin-top: 0;
    }

    div[role='presentation'] {
        @media (max-width: 800px) {
            margin-top: 0;
            margin-bottom: 10px;
            height: 76px;
        }
    }

    footer {
        justify-content: flex-end;
    }
`;

export default StyledTimeSelect;
