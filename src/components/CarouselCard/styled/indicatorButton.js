import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_GRAY_3 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledIndicatorButton = styled.button.attrs(props => {
    const brand = getTheme(props).palette.brand;
    const brandMainColor = brand.main;
    const brandDarkColor = brand.dark;

    return {
        brandMainColor,
        brandDarkColor,
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    font: inherit;
    width: 0.5rem;
    height: 0.5rem;
    background: ${COLOR_GRAY_2};
    border-radius: 50%;
    border: 1px solid ${COLOR_GRAY_2};
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :hover {
        background-color: ${COLOR_GRAY_3};
        border: 1px solid ${COLOR_GRAY_3};
    }

    :focus {
        outline: 0;
        box-shadow: ${props => props.brandShadow};
        border: 1px solid ${props => props.brandMainColor};
    }

    ${props =>
        props.isSelected &&
        `
            background: ${props.brandMainColor};
            border: 1px solid ${props.brandMainColor};

            :hover {
                background: ${props.brandDarkColor};
                border: 1px solid ${props.brandDarkColor};
            }
        `};
`;

export default StyledIndicatorButton;
