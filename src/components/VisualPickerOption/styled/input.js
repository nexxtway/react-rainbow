import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import { COLOR_BRAND, COLOR_GRAY_2, COLOR_GRAY_1 } from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';

const StyledInput = styled(HiddenElement)`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;

    :hover ~ label > [data-id='visual-picker_option'] {
        cursor: pointer;
        border: solid 1.5px ${COLOR_BRAND};
        box-shadow: 0 2px 4px 0 rgba(136, 152, 170, 0.5);
    }

    :focus ~ label > [data-id='visual-picker_option'] {
        border: solid 0.5px #67d3f9;
        box-shadow: 0 1px 2px 0 rgba(136, 152, 170, 0.5), ${SHADOW_OUTLINE};
    }

    :checked ~ label > [data-id='visual-picker_option'] {
        border: solid 2px ${COLOR_BRAND};
        position: relative;
    }

    &[disabled] ~ label > [data-id='visual-picker_option'] {
        border: solid 1.5px ${COLOR_GRAY_2};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${COLOR_GRAY_1};
        cursor: not-allowed;
    }
`;

export default StyledInput;
