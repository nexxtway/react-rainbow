import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const StyledIndicatorBar = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -0.0625rem;
    display: block;
    width: 99.9%;
    height: 1px;
    border: solid 0.5px ${COLOR_GRAY_2};
`;

export default StyledIndicatorBar;
