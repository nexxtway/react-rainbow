import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import Input from '../../Input/styled/input';

const StyledSelectedInput = attachThemeAttrs(styled(Input))`
    box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 4px #dddbda;
    caret-color: transparent;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    padding-right: 2.35rem;
    text-overflow: ellipsis;

    :focus,
    :active {
        box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 3px #dddbda, ${props => props.shadows.brand};
        padding-right: 2.35rem;
        text-overflow: ellipsis;
    }

    &[disabled] {
        box-shadow: none;
        color: ${props => props.palette.background.disabled};

        &:focus,
        &:active {
            padding-right: 1rem;
        }
    }
`;

export default StyledSelectedInput;
