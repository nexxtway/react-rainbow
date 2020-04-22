import styled from 'styled-components';
import { PADDING_XX_SMALL } from '../../../styles/paddings';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDots = attachThemeAttrs(styled.span)`
    font-size: 32px;
    font-weight: 200;
    height: 100%;
    color: ${props => props.palette.brand.main};
    margin: auto ${PADDING_XX_SMALL};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 0;
    }
`;

export default StyledDots;
