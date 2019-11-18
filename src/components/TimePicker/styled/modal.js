import styled from 'styled-components';
import Modal from '../../Modal';

const StyledModal = styled(Modal)`
    width: auto;
    height: fit-content;

    @media (max-width: 600px) {
        border-radius: 0 0 0.975rem 0.975rem !important;
        align-self: flex-start;
        width: 100% !important;
        max-width: 100% !important;
    }
`;

export default StyledModal;
