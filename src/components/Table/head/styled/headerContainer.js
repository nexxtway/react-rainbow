import styled from 'styled-components';
import { PADDING_X_SMALL } from '../../../../styles/paddings';

const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: ${props => (props.hideTableHeader ? 'none' : 'flex')};
    align-items: center;
    height: 44px;
    padding: 0 ${PADDING_X_SMALL};
`;

export default StyledHeaderContainer;
