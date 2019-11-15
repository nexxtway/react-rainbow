import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledCheckedTriangle = styled.span`
    position: absolute;
    top: -1px;
    right: -1px;
    border: 1.5rem solid transparent;
    border-radius: 0 20px 0 0;
    border-right-color: ${COLOR_BRAND};
    border-top-color: ${COLOR_BRAND};
    margin: 0;
    padding: 0;
`;

export default StyledCheckedTriangle;
