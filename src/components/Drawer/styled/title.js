import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';

const StyledTitle = attachThemeAttrs(styled.div)`
    color: ${props => props.palette.text.label};
    margin: 0 1.25rem;
    padding: 1.375rem 0 1.325rem;
    display: block;
    box-sizing: border-box;
    // border-bottom: 0.5px solid ${props => props.palette.border.divider};
    font-family: 'Lato Light';
    font-weight: 300;
    font-size: 24px;
    font-size: ${FONT_SIZE_HEADING_LARGE};
    font-stretch: normal;
    font-style: normal;
    line-height: normal;  
    letter-spacing: normal;
`;

export default StyledTitle;
