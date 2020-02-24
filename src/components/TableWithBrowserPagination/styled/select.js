import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSelect = attachThemeAttrs(styled.select)`
    appearance: none;
    width: 100%;
    line-height: 28px;
    height: 32px;
    border: 1px solid ${props => props.palette.border.divider};
    border-radius: 1rem;
    padding: 0 28px 0 12px;
    background-color: ${props => props.palette.background.main};
    color: ${props => props.palette.text.main};
    font-size: 14px;
    transition: all 0.1s linear;
    box-sizing: border-box;
    text-transform: none;

    :focus,
    :active {
        outline: 0;
        border: 1px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }
`;

export default StyledSelect;
