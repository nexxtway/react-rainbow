import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHour = attachThemeAttrs(styled.div)`
    position: relative;
    height: 40px;
    min-height: 40px;
    padding-right: 8px;
    text-align: right;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_SMALL};

    :first-child>div {
        display: none;
    }
`;

export default StyledHour;
