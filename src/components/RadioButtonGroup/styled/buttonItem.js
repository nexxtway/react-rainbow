/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_1, COLOR_GRAY_2, COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButtonItem = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;

    return {
        brandMainColor,
        brandDarkColor,
        getContrastText,
    };
})`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${props => props.brandMainColor};
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);
    background: transparent;

    &:hover,
    &:focus {
        color: ${props => props.brandDarkColor};
        background-color: ${COLOR_GRAY_2};
        cursor: pointer;
    }

    > [type='radio'] {
        width: 1px;
        height: 1px;
        border: 0;
        clip: rect(0 0 0 0);
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    ${props => {
        const brandMainContrastText = props.getContrastText(props.brandMainColor);
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.variant === 'brand' &&
            `
            background-color: transparent;
            border: 1px solid transparent;
            color: ${brandMainContrastText};

            &:link,
            &:visited {
                color: ${brandMainContrastText}
            }

            &:hover,
            &:focus,
            &:active {
                background-color: ${COLOR_GRAY_2};
                color: ${brandDarkContrastText};
            }

            &[disabled] {
                background-color: ${props.disabled ? props.brandMainColor : COLOR_GRAY_1};
                border-color: ${props.disabled ? props.brandMainColor : COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `
        );
    }};
    ${props => {
        const brandMainContrastText = props.getContrastText(props.brandMainColor);
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.variant === 'inverse' &&
            `
            background-color: transparent;
            border: 1px solid transparent;
            color: ${brandMainContrastText};

            &:hover {
                background-color: rgba(0, 0, 0, 0.95);
                cursor: pointer;
            }

            &:hover,
            &:focus,
            &:active {
                color: ${brandDarkContrastText};
            }
        
            &:focus {
                outline: none;
            }
        
            &[disabled] {
                background-color: transparent;
                color: ${COLOR_GRAY_4};
            }
        `
        );
    }};
    ${props =>
        props.isChecked &&
        `
            transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97), all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
            transform: translate3d(0, 0, 0);
            height: 100%;

            &:hover {
                background-color: transparent;
                cursor: pointer;
            }
        `};
    ${props =>
        props.disabled &&
        `
            &:hover {
                background-color: transparent;
            }
        `};
`;

export default StyledButtonItem;
