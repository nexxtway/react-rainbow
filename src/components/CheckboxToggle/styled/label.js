import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL, MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLabel = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-left: ${MARGIN_SMALL};

    ${props =>
        props.labelAlignment === 'left' &&
        `
            margin-right: 12px;
        `};

    ${props =>
        props.labelAlignment === 'top' &&
        `
            margin-left: 0;
            margin-bottom: ${MARGIN_XX_SMALL};
        `};
`;

export default StyledLabel;
