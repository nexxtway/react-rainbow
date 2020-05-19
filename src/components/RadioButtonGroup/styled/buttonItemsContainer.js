import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const sizeMap = { large: '3rem', medium: '2.5rem', small: '1.8rem', 'x-small': '1.3rem' };
const StyledButtonItemsContainer = attachThemeAttrs(styled.div).attrs(props => {
    const isDark = props.palette.isDark;
    const inverse = {
        border: isDark ? COLOR_GRAY_2 : 'rgba(0, 0, 0, 0.4)',
        background: isDark ? 'rgba(239,241,245,0.4)' : 'rgba(0, 0, 0, 0.4)',
    };

    return { inverse };
})`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px ${props => props.palette.border.divider};
    background-color: ${props => replaceAlpha(props.palette.background.highlight, 0.4)};
    line-height: ${props => sizeMap[props.size] || sizeMap.medium};
    height: ${props => sizeMap[props.size] || sizeMap.medium};

    > :first-child {
        margin-left: -1px;
    }

    > :last-child {
        margin-right: -2px;
    }

    ${props =>
        props.variant === 'inverse' &&
        `
            border: solid 1px ${props.inverse.border};
            background-color: ${props.inverse.background};
        `};
`;

export default StyledButtonItemsContainer;
