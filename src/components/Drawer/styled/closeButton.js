import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';

const StyledCloseButton = styled(ButtonIcon)`
    position: absolute;
    width: auto;
    height: auto;
    z-index: 1000002;
    bottom: 1rem;

    ${props =>
        props.slideFrom === 'left' &&
        `
    bottom: 1rem;
    right: 1.3125rem;
    `}
    ${props =>
        props.slideFrom === 'right' &&
        `
    bottom: 1rem;
    left: 1.3125rem;
    `}


    svg {
        width: auto !important;
        height: auto !important;
        ${props =>
            props.slideFrom === 'left' &&
            `
        transform: rotate(180deg);
        `};
    }
`;

export default StyledCloseButton;
