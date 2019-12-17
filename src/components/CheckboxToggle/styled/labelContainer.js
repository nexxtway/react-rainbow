/* stylelint-disable no-descending-specificity, max-line-length */
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_2, COLOR_GRAY_1, COLOR_GRAY_3 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledLabelContainer = styled.label.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;

    return {
        brandMainColor,
        brandDarkColor,
    };
})`
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
        border: solid 0.125rem #dcdfe7;
        background-color: ${COLOR_GRAY_2};
        position: relative;
        box-sizing: border-box;

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
            box-shadow: 0 0 2px 0 ${COLOR_GRAY_3};
            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);
            border-radius: 1rem;
            border: solid 0.125rem transparent;
            background-color: ${COLOR_WHITE};
            position: absolute;
            box-sizing: border-box;
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
            box-shadow: 0 0 4px ${props => props.brandMainColor};
        }

        :checked + .rainbow-checkbox-toggle_faux,
        :checked ~ .rainbow-checkbox-toggle_faux,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {
            border-color: ${props => props.brandDarkColor};
            background-color: ${props => props.brandMainColor};
        }

        :checked + .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux:focus,
        :checked ~ .rainbow-checkbox-toggle_faux:hover,
        :checked ~ .rainbow-checkbox-toggle_faux:focus,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:hover,
        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:focus {
            background-color: ${props => props.brandDarkColor};
            border-color: ${props => props.brandDarkColor};
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
            background-color: ${props => props.brandMainColor};
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
