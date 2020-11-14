/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledButtonGroup = attachThemeAttrs(styled.div)`
    display: inline-flex;

    > span:first-child,
    > label:first-child > span {
        border-radius: 100px 0 0 100px;
    }

    > span:last-child,
    > label:last-child > span {
        border-radius: 0 100px 100px 0;
    }

    > span:only-child,
    > label:only-child > span {
        border-radius: 100px;
    }

    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow:${props.shadows.shadow_10};
        border: 1px solid transparent;
        background-color: ${props.palette.background.main};
        border-radius: 100px;
        > label:last-child > div {
            display: none;
        }
    `}
`;

export default StyledButtonGroup;
