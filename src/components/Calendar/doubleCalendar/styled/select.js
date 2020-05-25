import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_LARGE } from '../../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../../styles/paddings';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Select from '../../../Select';

const StyledSelect = attachThemeAttrs(styled(Select))`
    select {
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
        background: ${props => props.palette.background.highlight};
        color: ${props => props.palette.text.main};
        padding: 0.125rem 1.8rem 0.125rem ${PADDING_MEDIUM};
        line-height: 2rem;
        height: 2.25rem;
        border-radius: 18px;
        box-sizing: border-box;
        transition: none;
        border: 1px solid transparent;

        option {
            font-size: ${FONT_SIZE_TEXT_LARGE};
        }

        &:hover,
        &:focus,
        &:active,
        &:visited {
            background: ${props => props.palette.background.main};
            border: 1px solid ${props => props.palette.border.main};
            box-shadow: none;
            padding-left: ${PADDING_MEDIUM};
            padding-right: 1.8rem;
        }
    }
`;

export default StyledSelect;
