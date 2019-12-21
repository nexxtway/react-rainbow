/* stylelint-disable */
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_2, COLOR_GRAY_1 } from '../../../../../styles/colors';
import getTheme from '../../../../../styles/helpers/getTheme';

const StyledInnerContainer = styled.div.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return {
        brandMainColor,
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
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
        border-bottom: 2px solid ${props => props.brandMainColor};
        border-left: 2px solid ${props => props.brandMainColor};
    }

    [type='checkbox']:checked + .rainbow-table-input-checkbox_faux,
    [type='checkbox']:checked ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:checked + label .rainbow-table-input-checkbox_faux {
        border: 2px solid ${props => props.brandMainColor};
    }

    [type='checkbox']:focus + .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus + label .rainbow-table-input-checkbox_faux {
        content: '';
        border: 2px solid ${props => props.brandMainColor};
        box-shadow: ${props => props.brandShadow};
    }

    [type='checkbox']:focus:checked > .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus:checked ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox']:focus:checked + label .rainbow-table-input-checkbox_faux {
        border-color: ${props => props.brandMainColor};
        background-color: ${COLOR_WHITE};
        box-shadow: ${props => props.brandShadow};
    }

    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux,
    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux,
    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux {
        background-color: ${COLOR_GRAY_1};
        border-color: ${COLOR_GRAY_2};
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
        background-color: ${props => props.brandMainColor};
        border: 0;
        transform: translate3d(-50%, -50%, 0);
    }

    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux::after,
    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux::after,
    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux::after {
        border-color: ${COLOR_WHITE};
    }
`;

export default StyledInnerContainer;
