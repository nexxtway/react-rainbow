import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';

const StyledArrowButton = styled(ButtonIcon)`
    ${props =>
        props.disabled &&
        `
            svg {
                fill: #e3e5ed;
            }
        `};
`;

export default StyledArrowButton;
