/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
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
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);

    &:hover {
        background-color: rgba(227, 229, 237, 0.4);
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

    ${props =>
        props.variant === 'inverse' &&
        `
                &:hover {
                    background-color: rgba(0, 0, 0, 0.95);
                    cursor: pointer;
                }
            `};
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
