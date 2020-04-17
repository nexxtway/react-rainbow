import styled from 'styled-components';
import { FONT_SIZE_HEADING_X_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitle = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_X_LARGE};
    color: ${props => props.palette.brand.main};
    text-transform: capitalize;
    font-weight: 300;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 1.5rem;
    min-width: 380px;
    padding: 0;
    text-transform: capitalize;
`;

export default StyledTitle;
