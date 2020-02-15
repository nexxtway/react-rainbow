import styled from 'styled-components';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHeaderTitle = attachThemeAttrs(styled.h1)`
    color: ${props => props.palette.brand.main};
    font-size: ${FONT_SIZE_HEADING_LARGE};
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
`;

export default StyledHeaderTitle;
