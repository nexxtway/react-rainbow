import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledAnchor = styled.a.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
    };
})`
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${COLOR_GRAY_4};
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;
    box-sizing: border-box;

    :hover,
    :focus {
        text-decoration: underline;
        color: ${props => props.brandMainColor};
    }

    :active {
        color: ${props => props.brandMainColor};
    }

    :active,
    :hover {
        outline: 0;
    }

    :hover {
        color: ${props => props.brandMainColor};
    }

    ${props =>
        props.disabled &&
        `
            color: #d2d4de;
            pointer-events: none;
    `};
`;

export default StyledAnchor;
