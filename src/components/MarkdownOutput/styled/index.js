import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../renderers/fontSizes';

const StyledContainer = attachThemeAttrs(styled.div)`
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.palette.text.main};
    line-height: 1.5;

    .task-list-item {
        list-style: none;
        margin-left: 0;
    }

    ${props =>
        props.variant === 'inline' &&
        `
        display: inline;

        > div {
            display: inline;
        }
    `}

    > div > *:first-child {
        margin-top: 0;
    }
`;

export default StyledContainer;
