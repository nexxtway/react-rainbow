import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledYearLabel = attachThemeAttrs(styled.div)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    padding: 0.125rem 1rem;
    line-height: 2rem;
    height: 2.25rem;
    border-radius: 18px;
    box-sizing: border-box;
    transition: all 0.1s linear;
    cursor: pointer;
    border: 1px solid transparent;
`;

export default StyledYearLabel;
