import styled from 'styled-components';
import { PADDING_XX_SMALL } from '../../../styles/paddings';

const StyledDots = styled.span.attrs(props => props.theme.rainbow.palette)`
    font-size: 32px;
    font-weight: 200;
    height: 100%;
    color: ${props => props.brand.main};
    margin: auto ${PADDING_XX_SMALL};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 0;
    }
`;

export default StyledDots;
