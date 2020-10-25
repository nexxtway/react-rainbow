import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';
import { getCurrentColor, getCurrentBackgroundColor } from '../helpers';

const StyledEvent = attachThemeAttrs(styled.div).attrs(props => {
    const { color, backgroundColor, palette } = props;
    const currentColor = getCurrentColor({ color, backgroundColor, palette });
    const currentBackgroundColor = getCurrentBackgroundColor({ backgroundColor, palette });

    return {
        currentColor,
        currentBackgroundColor,
    };
})`
    text-align: left;
    font-size: 12px;
    border: 1px solid ${props => replaceAlpha(props.palette.background.main, 0.8)};
    color: ${props => props.currentColor};
    background-color: ${props => props.currentBackgroundColor};
    width: 100%;
    min-height: 20px;
    border-radius: 8px;
    padding: 0 5px;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
`;

export default StyledEvent;
