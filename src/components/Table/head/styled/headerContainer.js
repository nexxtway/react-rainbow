import styled from 'styled-components';
import { PADDING_X_SMALL } from '../../../../styles/paddings';

const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 44px;
    padding: 0 ${PADDING_X_SMALL};
    ${props =>
        props.theme.variant === 'listview' &&
        `
            justify-content: center;
            text-transform: capitalize;
        `};
    ${props => props.headerAlignment === 'center' && 'justify-content: center;'}
    ${props => props.headerAlignment === 'right' && 'flex-direction: row-reverse;'}
`;

export default StyledHeaderContainer;
