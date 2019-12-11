/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { COLOR_GRAY_1, COLOR_GRAY_2 } from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButtonItem = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand, success, error } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const { main: successMainColor, dark: successDarkColor } = success;
    const { main: errorMainColor, dark: errorDarkColor } = error;

    return {
        brandMainColor,
        brandDarkColor,
        successMainColor,
        successDarkColor,
        errorMainColor,
        errorDarkColor,
        getContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
        successShadow: `0 0 2px ${successMainColor}`,
        errorShadow: `0 0 2px ${errorMainColor}`,
    };
})`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);

    &:hover {
        background-color: ${COLOR_GRAY_2};
        cursor: pointer;
    }

    &:focus,
    &:active {
        background-color: ${props => props.brandDarkColor};
        border-color: ${props => props.brandDarkColor};
        color: ${props => props.getContrastText(props.brandDarkColor)};
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

    ${props =>
        props.variant === 'inverse' &&
        `
                &:hover {
                    background-color: rgba(0, 0, 0, 0.95);
                    cursor: pointer;
                }
            `};
    ${props => {
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.variant === 'brand' &&
            `
            &:focus,
            &:active {
                background-color: ${props.brandDarkColor};
                border-color: ${props.brandDarkColor};
                color: ${brandDarkContrastText};
            }

            &:hover {
                background-color: ${COLOR_GRAY_2};
                cursor: pointer;
            }

            &[disabled] {
                background-color: transparent;
                border-color: transparent;
                color: ${COLOR_GRAY_1};
            }
            `
        );
    }};
    ${props => {
        const brandMainContrastText = props.getContrastText(props.brandMainColor);
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.isChecked &&
            `
                transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97), all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
                transform: translate3d(0, 0, 0);
                height: 100%;

                background-color: ${props.brandMainColor};
                border: 1px solid ${props.brandMainColor};
                color: ${brandMainContrastText};

                &:hover {
                    background-color: ${props.brandDarkColor};
                    cursor: pointer;
                    border-color: ${props.brandDarkColor};
                    color: ${brandDarkContrastText};
                }
            `
        );
    }};
    ${props =>
        props.disabled &&
        `
            &:hover {
                background-color: transparent;
            }
        `};
`;

export default StyledButtonItem;
