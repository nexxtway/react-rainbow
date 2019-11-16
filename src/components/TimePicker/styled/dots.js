import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';
import { PADDING_XX_SMALL } from '../../../styles/paddings';

const StyledDots = styled.span`
    font-size: 32px;
    font-weight: 200;
    height: 100%;
    color: ${COLOR_BRAND};
    margin: auto ${PADDING_XX_SMALL};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 0;
    }
`;

export default StyledDots;
