/* stylelint-disable no-descending-specificity, max-line-length */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLabelContainer = attachThemeAttrs(styled.label)`
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    .rainbow-checkbox-toggle_faux {
        display: block;
        width: 2.75rem;
        height: 1.5rem;
        padding: 0.125rem;
        transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
        border-radius: 1rem;
        border: solid 0.125rem ${props => props.palette.border.divider};
        background-color: ${props => props.palette.border.divider};
        position: relative;
        box-sizing: border-box;

        &:hover,
        &:focus {
            cursor: pointer;
            background-color: ${props => props.palette.border.main};
            border: solid 0.125rem ${props => props.palette.border.main};
        }

        &::after {
            content: '';
            top: 0;
            bottom: 0;
            margin: auto;
            left: 0.015625rem;
            width: 1.25rem;
            height: 1.25rem;
            box-shadow: ${props => props.shadows.shadow_1};
            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
            border-radius: 1rem;
            border: solid 0.125rem transparent;
            background-color: ${props => props.palette.background.main};
            position: absolute;
            box-sizing: border-box;
        }
    }

    [type='checkbox'] + .rainbow-checkbox-toggle_faux-container {
        font-size: 0.625rem;
        color: ${props => props.palette.border.divider};
    }

    [type='checkbox'] {
        :focus + .rainbow-checkbox-toggle_faux,
        :focus ~ .rainbow-checkbox-toggle_faux,
        :focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            border-color: ${props => props.palette.border.main};
            background-color: ${props => props.palette.border.main};
            outline: 0;
            box-shadow: ${props => props.shadows.brand}
        }

        :checked + .rainbow-checkbox-toggle_faux,
        :checked ~ .rainbow-checkbox-toggle_faux,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            border-color: ${props => props.palette.brand.dark};
            background-color: ${props => props.palette.brand.main};
        }

        :checked + .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux:focus,
        :checked ~ .rainbow-checkbox-toggle_faux:hover,
        :checked ~ .rainbow-checkbox-toggle_faux:focus,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:focus {
            background-color: ${props => props.palette.brand.dark};
            border-color: ${props => props.palette.brand.dark};
        }

        :checked + .rainbow-checkbox-toggle_faux::after,
        :checked ~ .rainbow-checkbox-toggle_faux::after,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {
            box-shadow: 0 0 0 0 transparent;
            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
            transform: translateX(20px);
            box-sizing: border-box;
        }

        :checked:focus + .rainbow-checkbox-toggle_faux,
        :checked:focus ~ .rainbow-checkbox-toggle_faux,
        :checked:focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            background-color: ${props => props.palette.brand.main};
        }

        &[disabled] + .rainbow-checkbox-toggle_faux,
        &[disabled] ~ .rainbow-checkbox-toggle_faux,
        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            pointer-events: none;
            border-radius: 1rem;
            border: solid 0.125rem rgba(164, 167, 181, 0.1);
            background-color: ${props => props.palette.background.disabled};
            position: relative;
        }

        &[disabled] + .rainbow-checkbox-toggle_faux::after,
        &[disabled] ~ .rainbow-checkbox-toggle_faux::after,
        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {
            background-color: ${props => props.palette.background.secondary};
            box-sizing: border-box;
        }

        /* prettier-ignore */
        &[disabled]:checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {
            background-color: transparent;
            box-sizing: border-box;
        }
    }
`;

export default StyledLabelContainer;
