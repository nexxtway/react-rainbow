import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { ZINDEX_DRAWER } from '../../../styles/zIndex';

const StyledBackDrop = attachThemeAttrs(styled.div)`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => replaceAlpha(props.palette.background.highlight, 0.64)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: ${ZINDEX_DRAWER};
    opacity: 1;
    backdrop-filter: blur(5px);
`;

export default StyledBackDrop;
