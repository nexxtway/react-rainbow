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
    }

    @media (max-width: 340px) {
        height: 100vh !important;
        max-height: 100vh !important;
    }
`;

export default StyledModal;
