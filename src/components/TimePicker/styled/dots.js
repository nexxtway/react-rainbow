import styled from 'styled-components';
import { PADDING_XX_SMALL } from '../../../styles/paddings';
import getTheme from '../../../styles/helpers/getTheme';

const StyledDots = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
    };
})`
    font-size: 32px;
    font-weight: 200;
    height: 100%;
    color: ${props => props.brandMainColor};
    margin: auto ${PADDING_XX_SMALL};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 0;
    }
`;

export default StyledDots;
