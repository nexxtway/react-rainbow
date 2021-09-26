import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledCellContent = attachThemeAttrs(styled.div)`
    border: 1px solid transparent;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    min-height: 42px;
    line-height: 40px;
    padding: 0 0.5rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    box-sizing: border-box;
    height: 100%;

    ${props =>
        props.component &&
        `
        padding: 0;
        }
    `}

    ${props =>
        props.isEditable &&
        !props.component &&
        `
        min-height: 20px;
        line-height: 12px;
        max-width: 100%;
        margin: auto;
        padding: 0.3rem 0.5rem;
        }
    `}
`;

export default StyledCellContent;
