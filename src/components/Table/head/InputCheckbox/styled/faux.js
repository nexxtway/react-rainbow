import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../../../styles/colors';
import { BORDER_RADIUS_3 } from '../../../../../styles/borderRadius';

const StyledFaux = styled.span`
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    border: 1px solid ${COLOR_GRAY_2};
    border-radius: ${BORDER_RADIUS_3};
    background: white;
    margin-right: $margin-small;
    transition: border 0.1s linear, background-color 0.1s linear;
`;

export default StyledFaux;
