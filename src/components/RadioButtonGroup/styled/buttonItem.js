/* stylelint-disable max-line-length */
import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledButtonItem = attachThemeAttrs(styled.span)`
    ${props => `
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
            background-color: ${
                props.palette.isDark ? 'rgba(28, 26, 18, 0.4)' : 'rgba(227, 229, 237, 0.4)'
            };
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

        ${props.variant === 'inverse' &&
            `
                &:hover {
                    background-color: ${
                        props.palette.isDark
                            ? 'rgba(250, 250, 250, 0.95)'
                            : 'rgba(250, 250, 250, 0.10)'
                    };
                    cursor: pointer;
                }
            `};
        ${props.isChecked &&
            `
                transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97), all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
                transform: translate3d(0, 0, 0);
                height: 100%;

                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                }
            `};
        ${props.disabled &&
            `
                &:hover {
                    background-color: transparent;
                }
            `};
    `};
`;

export default StyledButtonItem;
