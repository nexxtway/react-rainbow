import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledMoreAvatar = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const brandMainColor = brand.main;

    return {
        brandMainColor,
        getContrastText,
    };
})`
    background-color: ${props => props.brandMainColor};
    color: ${props => props.getContrastText(props.brandMainColor)};
    border-radius: 50%;
    display: inline-block;
    height: 2.5rem;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    width: 2.5rem;
    box-sizing: border-box;
    text-align: center;
    ${props =>
        props.size === 'large' &&
        `
            font-size: 1.125rem;
            height: 3.2rem;
            width: 3.2rem;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 1rem;
            height: 2.5rem;
            width: 2.5rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 0.625rem;
            height: 1.5rem;
            width: 1.5rem;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 0.625rem;
            height: 1.25rem;
            width: 1.25rem;
        `};
`;

export default StyledMoreAvatar;
