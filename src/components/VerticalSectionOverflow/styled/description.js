import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import TruncatedText from '../../Structural/truncatedText';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';

const StyledDescription = attachThemeAttrs(styled(TruncatedText))`
    font-size: ${FONT_SIZE_TEXT_X_SMALL};
    line-height: 1rem;
    color: ${props => props.palette.text.label};
    text-align: left;
    max-width: 100%;
    transition: all 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    ${props =>
        props.isExpanded &&
        `
            opacity: 0;
        `};
`;

export default StyledDescription;
