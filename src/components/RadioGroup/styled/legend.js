import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL, MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLegend = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    box-sizing: border-box;
    display: inline-block;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-right: ${MARGIN_SMALL};
    margin-bottom: ${MARGIN_XX_SMALL};
    width: 100%;
`;

export default StyledLegend;
