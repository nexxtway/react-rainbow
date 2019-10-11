/* stylelint-disable no-descending-specificity, max-line-length */
import styled from 'styled-components';
import {
    COLOR_WHITE,
    COLOR_GRAY_2,
    COLOR_BRAND,
    COLOR_BRAND_2,
    COLOR_GRAY_1,
} from '../../../styles/colors';

const StyledLabelContainer = styled.label`
    display: inline-flex;
    align-items: center;

    .rainbow-checkbox-toggle_faux {
        display: block;
        width: 2.75rem;
        height: 1.5rem;
        padding: 0.125rem;
        transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
        border-radius: 1rem;
        border: solid 0.125rem #dcdfe7;
        background-color: ${COLOR_GRAY_2};
        position: relative;

        &:hover,
        &:focus {
            cursor: pointer;
            background-color: #dcdfe7;
        }

        &::after {
            content: '';
            top: 0;
            bottom: 0;
            margin: auto;
            left: 0.015625rem;
            width: 1.25rem;
            height: 1.25rem;
            box-shadow: 0 0 2px 0 $color-gray-3;
            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
            border-radius: 1rem;
            border: solid 0.125rem transparent;
            background-color: ${COLOR_WHITE};
            position: absolute;
        }
    }

    [type='checkbox'] + .rainbow-checkbox-toggle_faux-container {
        font-size: 0.625rem;
        color: ${COLOR_GRAY_2};
    }

    [type='checkbox'] {
        :focus + .rainbow-checkbox-toggle_faux,
        :focus ~ .rainbow-checkbox-toggle_faux,
        :focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            background-color: ${COLOR_GRAY_2};
            border-color: #dcdfe7;
            outline: 0;
            box-shadow: 0 0 4px ${COLOR_BRAND};
        }

        :checked + .rainbow-checkbox-toggle_faux,
        :checked ~ .rainbow-checkbox-toggle_faux,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            border-color: ${COLOR_BRAND_2};
            background-color: ${COLOR_BRAND};
        }

        :checked + .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux:focus,
        :checked ~ .rainbow-checkbox-toggle_faux:hover,
        :checked ~ .rainbow-checkbox-toggle_faux:focus,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:focus {
            background-color: ${COLOR_BRAND_2};
            border-color: ${COLOR_BRAND_2};
        }

        :checked + .rainbow-checkbox-toggle_faux::after,
        :checked ~ .rainbow-checkbox-toggle_faux::after,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {
            box-shadow: 0 0 0 0 transparent;
            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
            transform: translateX(20px);
        }

        :checked:focus + .rainbow-checkbox-toggle_faux,
        :checked:focus ~ .rainbow-checkbox-toggle_faux,
        :checked:focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            background-color: ${COLOR_BRAND};
        }

        &[disabled] + .rainbow-checkbox-toggle_faux,
        &[disabled] ~ .rainbow-checkbox-toggle_faux,
        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            pointer-events: none;
            border-radius: 1rem;
            border: solid 0.125rem rgba(164, 167, 181, 0.1);
            background-color: ${COLOR_GRAY_1};
            position: relative;
        }

        &[disabled] + .rainbow-checkbox-toggle_faux::after,
        &[disabled] ~ .rainbow-checkbox-toggle_faux::after,
        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {
            background-color: ${COLOR_WHITE};
            box-shadow: 0 0 1px 0 ${COLOR_GRAY_2};
        }

        &[disabled]:checked
            + .rainbow-checkbox-toggle_faux-container
            .rainbow-checkbox-toggle_faux::after {
            background-color: transparent;
        }
    }
`;

export default StyledLabelContainer;
