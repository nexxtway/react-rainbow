import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../../styles/fontSizes';

const StyledSearch = attachThemeAttrs(styled.input)`
    font: inherit;
    background-color: transparent;
    border: 0;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    margin: 0;
    width: 100%;
    padding: 0;
    line-height: 2rem;
    height: 2rem;

    :focus,
    :active {
        outline: 0;
        background-color: transparent;
        border: 0;
    }
`;

export default StyledSearch;
