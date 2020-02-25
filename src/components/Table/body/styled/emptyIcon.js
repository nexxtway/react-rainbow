import styled from 'styled-components';
import { MARGIN_MEDIUM } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEmptyIcon = attachThemeAttrs(styled.span)`
    margin-bottom: ${MARGIN_MEDIUM};
    color: ${props => props.palette.border.divider};
`;

export default StyledEmptyIcon;
