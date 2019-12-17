import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledDayButton = styled.button.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return {
        brandMainColor,
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    font: inherit;
    border: none;
    outline: none;
    transition: all 0.2s ease;
    background-color: transparent;
    border-radius: 48px;
    line-height: 38px;
    height: 38px;
    width: 38px;
    margin: 6px auto;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    overflow: visible;
    text-transform: none;
    appearance: button;

    &:hover {
        transition: all 0.2s ease;
        background-color: ${COLOR_GRAY_2};
    }

    &:active {
        transform: scale(0.85);
        transition: all 0.2s ease;
    }

    &:focus,
    &:active {
        box-shadow: ${props => props.brandShadow};
    }

    @media (max-width: 600px) {
        margin: 3px auto;
    }

    ${props =>
        props.isSelected &&
        `
            color: white;
            background-color: ${props.brandMainColor};
            text-align: center;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            font-weight: 600;
            border-radius: 48px;
            line-height: 36px;
            height: 36px;
            width: 36px;
            margin: 5px auto;
            padding: 0;
            border: none;
            outline: none;
        
            &:active {
                transform: scale(0.85);
                transition: all 0.2s ease;
            }
        
            &:hover {
                background-color: ${props.brandMainColor};
            }

            @media (max-width: 600px) {
                margin: 3px auto;
            }
        `};
`;

export default StyledDayButton;
