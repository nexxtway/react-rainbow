import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHour = attachThemeAttrs(styled.div)`
    position: relative;
    height: 50px;
    min-height: 50px;
    padding-right: 8px;
    text-align: right;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_SMALL};

    span {
        display: block;
        position: relative;
        top: -7px;
    }

    :first-child>span {
        display: none;
    }
`;

export default StyledHour;
