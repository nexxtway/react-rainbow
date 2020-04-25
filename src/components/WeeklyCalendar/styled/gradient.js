import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledGradient = attachThemeAttrs(styled.div)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 38px;
    background-image: linear-gradient(
        to bottom,
        ${props => replaceAlpha(props.palette.background.main, 0)},
        ${props => replaceAlpha(props.palette.background.main, 0.88)} 71%
    );
`;

export default StyledGradient;
