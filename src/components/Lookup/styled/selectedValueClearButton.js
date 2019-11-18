import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';

const StyledSelectedValueClearButton = styled.span`
    height: 100%;
    right: 0.5rem;
    position: absolute;
    line-height: 1;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: ${COLOR_GRAY_4};
`;

export default StyledSelectedValueClearButton;
