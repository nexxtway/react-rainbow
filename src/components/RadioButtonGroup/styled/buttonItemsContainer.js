import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import { hexToRgba } from '../../../styles/helpers/color';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledButtonItemsContainer = attachThemeAttrs(styled.div)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px ${props => props.palette.border.divider};
    background-color: ${props => hexToRgba(props.palette.background.highlight, 0.4)};
    line-height: 2.5rem;
    height: 2.5rem;

    > :first-child {
        margin-left: -1px;
    }

    > :last-child {
        margin-right: -2px;
    }

    ${props =>
        props.variant === 'inverse' &&
        `
            border-color: rgba(0, 0, 0, 0.4);
            background-color: rgba(0, 0, 0, 0.4);
        `};
`;

export default StyledButtonItemsContainer;
