import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledHeading = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    font-weight: inherit;
    line-height: 1.25;
    color: ${props => props.palette.text.main};
    width: 100%;
    margin: 0;
    padding: 0;
    ${props => props.disabled && `color: ${props.palette.text.disabled};`};
`;

export default StyledHeading;
