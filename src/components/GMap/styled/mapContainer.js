import styled from 'styled-components';
import { COLOR_GRAY_1 } from '../../../styles/colors';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4 } from '../../../styles/shadows';

const StyledMapContainer = styled.div`
    align-self: center;
    border: solid 1px ${COLOR_GRAY_1};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_4};
    height: 99%;
    width: 99%;
`;

export default StyledMapContainer;
