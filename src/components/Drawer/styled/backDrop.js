import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledBackDrop = attachThemeAttrs(styled.div)`
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => replaceAlpha(props.palette.background.highlight, 0.64)};
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    ${props =>
        props.isOpen &&
        `
            visibility: visible;
            z-index: 1000000;
            opacity: 1;
        `};
`;

export default StyledBackDrop;
