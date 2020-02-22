import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledActiveIcon = attachThemeAttrs(styled.div)`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${BORDER_RADIUS_2};
    border: 0.375rem solid ${props => props.palette.brand.main};
    box-sizing: border-box;
`;

export default StyledActiveIcon;
