/* stylelint-disable */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInnerContainer = attachThemeAttrs(styled.div)`
    display: inline-block;

    [type='checkbox'] {
        width: 1px;
        height: 1px;
        border: 0;
        clip: rect(0 0 0 0);
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    [type='checkbox']:checked + .rainbow-table-input-checkbox_faux::after,
    [type='checkbox']:checked ~ .rainbow-table-input-checkbox_faux::after,
    [type='checkbox']:checked + label .rainbow-table-input-checkbox_faux::after {
        display: block;
        content: '';
        height: 0.4rem;
        width: 0.65rem;
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
        border-bottom: 2px solid ${props => props.palette.brand.main};
        border-left: 2px solid ${props => props.palette.brand.main};
    }

    [type='checkbox']:checked + .rainbow-table-input-checkbox_faux,
    [type='checkbox']:checked ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:checked + label .rainbow-table-input-checkbox_faux {
        border: 2px solid ${props => props.palette.brand.main};
    }

    [type='checkbox']:focus + .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus + label .rainbow-table-input-checkbox_faux {
        content: '';
        border: 2px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }

    [type='checkbox']:focus:checked > .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus:checked ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus:checked + label .rainbow-table-input-checkbox_faux {
        border-color: ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
    }

    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux,
    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux {
        background-color: ${props => props.palette.background.disabled};
        border-color: ${props => props.palette.border.divider};
    }

    [type='checkbox']:indeterminate + .rainbow-table-input-checkbox_faux::after,
    [type='checkbox']:indeterminate ~ .rainbow-table-input-checkbox_faux::after,
    [type='checkbox']:indeterminate + label .rainbow-table-input-checkbox_faux::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.5rem;
        height: 2px;
        background-color: ${props => props.palette.brand.main};
        border: 0;
        transform: translate3d(-50%, -50%, 0);
    }

    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux::after,
    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux::after,
    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux::after {
        border-color: ${props => props.palette.border.disabled};
    }
`;

export default StyledInnerContainer;
