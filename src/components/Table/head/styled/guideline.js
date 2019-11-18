import styled from 'styled-components';
import { COLOR_BRAND, COLOR_BRAND_ACTIVE } from '../../../../styles/colors';

const StyledGuideline = styled.span`
    background-color: transparent;
    height: 100vh;
    position: absolute;
    right: 0;
    width: 1px;

    :hover {
        background-color: ${COLOR_BRAND};
    }

    :active {
        background-color: ${COLOR_BRAND_ACTIVE};
    }
`;

export default StyledGuideline;
