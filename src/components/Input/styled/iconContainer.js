import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const IconContainer = styled.span.attrs(props => {
    const palette = getTheme(props).palette;
    const errorMainColor = palette.error.main;
    const textSecondary = palette.text.secondary;
    return {
        errorMainColor,
        textSecondary,
    };
})`
    color: ${props => props.textSecondary};
    height: 100%;
    width: 22px;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px !important;
        height: 16px !important;
        font-size: 16px !important;
    }

    :not(button) {
        pointer-events: none;
    }

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: ${props.readOnly ? 0 : '0.8rem'};
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: ${props.readOnly ? 0 : '0.8rem'};
    `}
    ${props =>
        props.error &&
        `
        fill: ${props.errorMainColor};
        color: ${props.errorMainColor};
    `}
`;

export default IconContainer;
