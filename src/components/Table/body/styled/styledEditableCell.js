import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../../ButtonIcon';

export const IconContainer = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.brand.main};
    height: 100%;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    align-items: center;
    justify-content: center;
    display: none;
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: 0.4rem;
    `}
`;

export const StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))`
    height: 100%;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    align-items: center;
    justify-content: center;
    display: none;
    right: -0.4rem;
`;

export const StyledInput = attachThemeAttrs(styled.input)`
    width: 100%;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 25px 5px 6px;
    border-radius: 0.2rem;
    background-color: ${props => props.palette.background.main};
    display: inline-block;
    box-sizing: border-box;
    margin: 0;

    :hover{
        border: 1px dotted;
        padding-left: 0;
        padding: 5px 25px 5px 5px;
        ~ span {
            display: flex;
        }
    }

    :focus{
        outline: none;
        border: 1px dotted;
        border-color:${props => props.palette.brand.main};
        caret-color: ${props => props.palette.brand.main};
        padding: 5px 25px 5px 5px;
        ~ button {
            display: flex;
        }
        ~ span {
            display: none;
        }
    }
`;
