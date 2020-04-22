import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';

const StyledEvent = attachThemeAttrs(styled.div)`
    text-align: left;
    border: 1px solid ${props => replaceAlpha(props.palette.background.main, 0.8)};
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    background-color: ${props => props.palette.brand.main};
    width: 100%;
    min-height: 18px;
    border-radius: 8px;
    padding: 0 5px;
    overflow: hidden;
    position: absolute;
    display: flex;
    cursor: pointer;
`;

export default StyledEvent;
