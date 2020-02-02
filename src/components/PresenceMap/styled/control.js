import styled from 'styled-components';
import { COLOR_WHITE } from '../../../styles/colors';
import { SHADOW_1 } from '../../../styles/shadows';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledControl = styled.div`
    background-color: ${COLOR_WHITE};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_1};
    cursor: pointer;
    margin: 10px;
    text-align: center;
    padding: 5px;
`;

export default StyledControl;
