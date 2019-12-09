import styled from 'styled-components';
import { COLOR_WHITE } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledContainer = styled.li.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.75rem;
    background-color: transparent;
    box-sizing: border-box;

    :nth-child(1) > button::after {
        background-color: transparent;
        box-sizing: border-box;
    }

    @media (max-width: 600px) {
        width: 0;
        height: 4rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
    }

    ${props =>
        props.fullWidth &&
        `
            flex-grow: 1;
        `};
    ${props =>
        props.isActive &&
        `
            background-color: ${COLOR_WHITE};
            color: ${props.brandMainColor};
            border-radius: 14px 14px 0 0;
            z-index: 2;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            box-sizing: border-box;

            &::after {
                left: -40px;
                content: '';
                background: transparent;
                position: absolute;
                bottom: -16px;
                height: 56px;
                width: 56px;
                border-radius: 100%;
                border-width: 16px;
                border-style: solid;
                border-color: transparent white transparent transparent;
                -webkit-transform: rotate(45deg);
                box-sizing: border-box;
            }
        
            &::before {
                right: -40px;
                content: '';
                background: transparent;
                position: absolute;
                bottom: -16px;
                height: 56px;
                width: 56px;
                border-radius: 100%;
                border-width: 16px;
                border-style: solid;
                border-color: transparent white transparent transparent;
                -webkit-transform: rotate(145deg);
                box-sizing: border-box;
            }
        
            &:hover, &:active, &:visited, &:focus {
                color: $color-brand;
                background-color: white;
            }
            
            @media (max-width: 600px) {
                border-radius: 0;
                position: relative;
                width: 100%;
            }

            &::after {
                left: unset;
                content: unset;
                background: unset;
                position: unset;
                bottom: unset;
                height: unset;
                width: unset;
                border-radius: unset;
                border-width: unset;
                border-style: unset;
                border-color: unset;
                -webkit-transform: unset;
                box-sizing: border-box;
            }

            &::before {
                background: unset;
                border-width: unset;
                border-style: unset;
                border-color: unset;
                -webkit-transform: unset;
                content: "";
                height: 0.125rem;
                width: 100%;
                left: 0;
                bottom: 0;
                position: absolute;
                background-color: #01b6f5;
                border-radius: 100px;
                box-sizing: border-box;
            }
        `};
`;

export default StyledContainer;
