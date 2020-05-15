/* stylelint-disable max-line-length */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const sizeMap = { large: '3rem', medium: '2.5rem', small: '1.8rem', 'x-small': '1.3rem' };
const StyledButtonItem = attachThemeAttrs(styled.span)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: ${props => sizeMap[props.size] || sizeMap.medium};
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px transparent;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),
        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
    transform: translate3d(0, 0, 0);

    &:hover {
        background-color: ${props => replaceAlpha(props.palette.background.highlight, 0.6)};
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
                background-color: ${
                    props.palette.isDark ? 'rgba(193, 193, 193, 0.4)' : 'rgba(250, 250, 250, 0.10)'
                };
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
