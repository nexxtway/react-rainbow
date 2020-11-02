import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_X_SMALL } from '../../../styles/margins';

const ButtonsContainer = attachThemeAttrs(styled.div)`
    display: flex;
    box-shadow:${props => props.shadows.shadow_10};
    border-radius: 100px;
    margin-left: ${MARGIN_X_SMALL};
    margin-right: ${MARGIN_X_SMALL};
`;

export default ButtonsContainer;
