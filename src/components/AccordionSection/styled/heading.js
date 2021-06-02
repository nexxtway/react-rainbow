import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledHeading = attachThemeAttrs(styled.h3)`
    display: flex;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    font-weight: bold;
    line-height: 1.25;
    color: ${props => props.palette.text.main};
    width: 100%;
    margin: 0;
    padding: 0 ${PADDING_MEDIUM};
    ${props => props.disabled && `color: ${props.palette.text.disabled};`};
    text-align: left;
`;

export default StyledHeading;
