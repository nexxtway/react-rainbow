import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayAdjacent = attachThemeAttrs(styled.span)`
    display: inline-block;
    background-color: transparent;
    color: ${props => props.palette.text.disabled};
    text-align: center;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 38px;
    height: 38px;
    margin: 6px auto;
    cursor: not-allowed;
    user-select: none;

    @media (max-width: 600px) {
        margin: 3px auto;
    }
`;

export default StyledDayAdjacent;
