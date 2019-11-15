import styled from 'styled-components';
import ButtonGroup from '../../ButtonGroup';
import { MARGIN_MEDIUM } from '../../../styles/margins';

const StyledButtonGroup = styled(ButtonGroup)`
    z-index: 4;
    padding-left: 1rem;

    @media (max-width: 600px) {
        margin-left: ${MARGIN_MEDIUM};
        padding-left: 0;
    }
`;

export default StyledButtonGroup;
