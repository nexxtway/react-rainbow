import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitle = attachThemeAttrs(styled.h2)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 500;
    color: ${props => props.palette.text.title};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    padding: 0;
`;

export default StyledTitle;
