import styled from 'styled-components';
import Modal from '../../Modal';

const StyledModal = styled(Modal)`
    &.rainbow-modal {
        width: auto;
    }

    @media (max-width: 600px) {
        align-self: flex-start;

        &.rainbow-modal {
            border-radius: 0 0 0.875rem 0.875rem;
        }

        & .rainbow-time-picker_time-select-content {
            margin-top: 0;
            margin-bottom: 10px;
            height: 76px;
        }
    }
`;

export default StyledModal;
