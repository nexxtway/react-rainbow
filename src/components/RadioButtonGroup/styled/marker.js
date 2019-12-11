/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { COLOR_GRAY_1, COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledMarker = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;

    return {
        brandMainColor,
        brandDarkColor,
        getContrastText,
    };
})`
    position: absolute;
    background: transparent;
    opacity: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 2.6rem;
    margin-top: -0.05rem;
    border-color: white;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);

    &:hover,
    &:focus {
        color: ${props => props.brandDarkColor};
    }

    &[disabled] {
        color: ${COLOR_GRAY_2};
        cursor: default;
    }

    &[disabled] * {
        cursor: default;
        pointer-events: none;
    }

    ${props =>
        props.variant === 'inverse' &&
        `
            box-shadow: 0 0 4px 0 ${props.brandMainColor};
            background-color: ${props.brandMainColor};
            border: solid 1px ${props.brandMainColor};
        `};
    ${props => {
        const brandMainContrastText = props.getContrastText(props.brandMainColor);
        const brandDarkContrastText = props.getContrastText(props.brandDarkColor);

        return (
            props.variant === 'brand' &&
            `
            background-color: ${props.brandMainColor};
            border: 1px solid ${props.brandMainColor};
            color: ${brandMainContrastText};

            &:hover,
            &:focus,
            &:active {
                background-color: ${props.brandDarkColor};
                border-color: ${props.brandDarkColor};
                color: ${brandDarkContrastText};
            }

            &[disabled] {
                background-color: ${COLOR_GRAY_1};
                border-color: ${COLOR_GRAY_1};
                color: ${COLOR_GRAY_2};
            }
        `
        );
    }};
`;

export default StyledMarker;
