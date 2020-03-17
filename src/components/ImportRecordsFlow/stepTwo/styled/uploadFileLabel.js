import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledUploadFileLabel = styled.label.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const brandMainContrastText = getContrastText(brandMainColor);
    const brandDarkContrastText = getContrastText(brandDarkColor);

    return {
        brandMainColor,
        brandDarkColor,
        brandMainContrastText,
        brandDarkContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    background-color: ${props => props.brandMainColor};
    border: 1px solid ${props => props.brandMainColor};
    color: ${props => props.brandMainContrastText};
    padding: 0 1rem;
    text-align: center;
    vertical-align: middle;
    transition: border 0.15s linear;
    align-items: center;
    display: inline-flex;
    font-size: 1rem;
    justify-content: center;
    position: relative;
    background-clip: border-box;
    border-radius: 100px;
    line-height: 2.375rem;
    text-decoration: none;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    box-sizing: border-box;
    ${props =>
        props.isDragOver &&
        `
            width: 0;
            height: 0;
            overflow: hidden;
    `}

    &:focus {
        outline: 0;
        box-shadow: ${props => props.brandShadow};
    }

    &:active {
        transform: scale(0.95);
        transition: all 0.2s ease;
        text-decoration: none;
    }

    &:hover,
    &:focus,
    &:active {
        background-color: ${props => props.brandDarkColor};
        border-color: ${props => props.brandDarkColor};
        color: ${props => props.brandMainContrastText};
    }
`;

export default StyledUploadFileLabel;
