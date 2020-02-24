import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';

const StyledCloseButton = styled(ButtonIcon)`
    position: absolute;
    bottom: 1rem;
    left: 1.3125rem;
    width: auto;
    height: auto;
    z-index: 1000002;

    svg {
        width: auto !important;
        height: auto !important;
        ${'' /* transform: rotate(180deg); */}
    }
`;

export default StyledCloseButton;
