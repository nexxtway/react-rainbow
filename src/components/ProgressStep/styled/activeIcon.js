import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledActiveIcon = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${BORDER_RADIUS_2};
    border: 0.375rem solid ${COLOR_BRAND};
    box-sizing: border-box;
`;

export default StyledActiveIcon;
