import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledMapContainer = attachThemeAttrs(styled.div)`
    align-self: center;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${props => props.shadows.shadow_4};
    height: 99%;
    width: 99%;
`;

export default StyledMapContainer;
