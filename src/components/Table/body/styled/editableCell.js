import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../../ButtonIcon';
import Edit from '../icons/edit';

export const StyledEditIcon = attachThemeAttrs(styled(Edit))`
    color: ${props => props.palette.brand.main};
    flex-shrink: 0;
    display: none;
`;

export const StyledSpan = attachThemeAttrs(styled.span)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.palette.text.title};
    padding: 0 10px 0 0;
`;

export const SpanContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between
    align-items: center;
    color: ${props => props.palette.brand.main};
    min-height: 30px;
    line-height: 18px;
    max-width: 100%;
    padding: 5px;
    margin: auto;
    border-radius: 0.2rem;
    width: 100%;
    :hover {
        padding: 5px 5px 5px 4px;
        border: 1px dotted ${props => props.palette.border.main};
        cursor: pointer;
        > svg { 
            display: inline;
        }
    }
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
    display: flex;
    right: -0.4rem;
    color: ${props => props.palette.border.main};
`;

export const RelativeInputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = attachThemeAttrs(styled.input)`
    width: 100%;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 0.2rem;
    background-color: ${props => props.palette.background.main};
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    color: ${props => props.palette.text.title};
    border: 1px dotted ${props => props.palette.brand.main};
    padding: 5px 25px 5px 4px;;

    :focus{
        outline: none;
        caret-color: ${props => props.palette.brand.main};
    }
`;
