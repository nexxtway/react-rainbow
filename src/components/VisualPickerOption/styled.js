import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import HiddenElement from '../Structural/hiddenElement';
import CheckmarkIcon from './checkmark';

export const StyledContainer = styled.span`
    margin: 0 0.25rem 0.5rem 0.25rem;
`;

const sizeMap = { large: '210px', medium: '142px', small: '100px' };
export const StyledContent = attachThemeAttrs(styled.span)`
    height: ${props => sizeMap[props.size] || sizeMap.medium};
    width: ${props => sizeMap[props.size] || sizeMap.medium};
    border-radius: 22px;
    box-shadow: ${props => props.shadows.shadow_4};
    border: solid 2px ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
`;

export const StyledInput = attachThemeAttrs(styled(HiddenElement))`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;

    :hover ~ label > [data-id='visual-picker_option'] {
        cursor: pointer;
        border: solid 1.5px ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.shadow_2};
    }

    :focus ~ label > [data-id='visual-picker_option'] {
        border: solid 1px ${props => props.palette.brand.light};
        box-shadow: ${props => props.shadows.shadow_4}, ${props => props.shadows.brand};
    }

    :checked ~ label > [data-id='visual-picker_option'] {
        border: solid 2px ${props => props.palette.brand.main};
        position: relative;
    }

    &[disabled] ~ label > [data-id='visual-picker_option'] {
        border: solid 1.5px ${props => props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${props => props.palette.background.disabled};
        cursor: not-allowed;
    }
`;

export const StyledFooter = styled.span`
    width: 100%;
    padding-top: 0.5rem;
`;

export const StyledCheckedTriangle = attachThemeAttrs(styled.span)`
    position: absolute;
    top: -1px;
    right: -1px;
    border: 1.5rem solid transparent;
    border-radius: 0 20px 0 0;
    border-right-color: ${props => props.palette.brand.main};
    border-top-color: ${props => props.palette.brand.main};
    margin: 0;
    padding: 0;
`;

export const StyledCheckmarkIcon = attachThemeAttrs(styled(CheckmarkIcon))`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height:10px;
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
`;
