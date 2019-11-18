import styled from 'styled-components';
import { COLOR_GRAY_4, COLOR_GRAY_3 } from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import Input from '../../Input/styled/input';

const StyledSelectedInput = styled(Input)`
    box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 4px #dddbda;
    caret-color: transparent;
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    padding-right: 2.35rem;
    text-overflow: ellipsis;

    :focus,
    :active {
        box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 3px #dddbda, ${SHADOW_OUTLINE};
        padding-right: 2.35rem;
        text-overflow: ellipsis;
    }

    &[disabled] {
        box-shadow: none;
        color: ${COLOR_GRAY_3};

        &:focus,
        &:active {
            padding-right: 1rem;
        }
    }
`;

export default StyledSelectedInput;
