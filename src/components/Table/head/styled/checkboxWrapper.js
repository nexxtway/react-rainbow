import styled from 'styled-components';
import StyledWrapper from './wrapper';
import { COLOR_GRAY_1 } from '../../../../styles/colors';

const StyledCheckboxWrapper = styled(StyledWrapper)`
    align-items: center;
    display: flex;
    padding: 0 15px;
    border: 1px solid ${COLOR_GRAY_1};
`;

export default StyledCheckboxWrapper;
