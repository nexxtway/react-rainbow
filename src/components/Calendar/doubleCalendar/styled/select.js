import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_LARGE } from '../../../../styles/fontSizes';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Select from '../../../Select';

const StyledSelect = attachThemeAttrs(styled(Select))`
    select {
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
        padding-top: 0.125rem;
        padding-bottom: 0.125rem;
        line-height: 2rem;
        height: 2.25rem;
        border-radius: 18px;

        option {
            font-size: ${FONT_SIZE_TEXT_LARGE};
        }
    }
`;

export default StyledSelect;
