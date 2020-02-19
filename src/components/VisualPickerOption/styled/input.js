import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HiddenElement from '../../Structural/hiddenElement';

const StyledInput = attachThemeAttrs(styled(HiddenElement))`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;

    :hover ~ label > [data-id='visual-picker_option'] {
        cursor: pointer;
        border: solid 1.5px ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.shadow_2};
    }

    :focus ~ label > [data-id='visual-picker_option'] {
        border: solid 1px ${props => props.palette.brand.light};
        box-shadow: ${props => props.shadows.shadow_4}, ${props => props.shadows.brand};
    }

    :checked ~ label > [data-id='visual-picker_option'] {
        border: solid 2px ${props => props.palette.brand.main};
        position: relative;
    }

    &[disabled] ~ label > [data-id='visual-picker_option'] {
        border: solid 1.5px ${props => props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${props => props.palette.background.disabled};
        cursor: not-allowed;
    }
`;

export default StyledInput;
