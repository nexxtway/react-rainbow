import styled from 'styled-components';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_MEDIUM, PADDING_XX_LARGE } from '../../../styles/paddings';

const StyledContent = attachThemeAttrs(styled.section)`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
    color: $color-gray-4;
    padding-left: ${PADDING_XX_LARGE};
    padding-right: ${PADDING_MEDIUM};
    padding-bottom: 0.875rem;
    padding-top: 0.875rem;
    ${props => props.isCollapsed && 'display: none;'};
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.divider};
    border-top: 0;
    border-bottom-left-radius: ${BORDER_RADIUS_3};
    border-bottom-right-radius: ${BORDER_RADIUS_3};
`;

export default StyledContent;
