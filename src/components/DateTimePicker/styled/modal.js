import styled from 'styled-components';
import Modal from '../../Modal';

const StyledModal = styled(Modal)`
    width: fit-content !important;

    @media (max-width: 800px) {
        align-self: flex-start;
        border-radius: 0 0 0.875rem 0.875rem !important;
        height: fit-content !important;
        max-height: fit-content !important;
        width: 100vw !important;

        & .rainbow-time-picker_time-select-content {
            margin-top: 0;
            margin-bottom: 10px;
            height: 76px;
        }
    }
`;

export default StyledModal;
