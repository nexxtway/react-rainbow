import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayAdjacent = attachThemeAttrs(styled.span)`
    display: block;
    color: ${props => props.palette.text.disabled};
    text-align: right;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    font-weight: 400;
    padding: 7px 7px 0 0;
    cursor: not-allowed;
    user-select: none;

    @media (max-width: 600px) {
        margin: 3px auto;
    }
`;

export default StyledDayAdjacent;
