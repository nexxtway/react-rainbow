import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

export const StyledColor = styled.div`
    position: relative;
    min-height: 160px;
    height: 100%;
    overflow: hidden;

    &::before {
        content: '';
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(0deg, #000, rgba(0, 0, 0, 0.9) 1%, transparent 99%),
            linear-gradient(90deg, #fff 1%, hsla(0, 0%, 100%, 0));
    }
`;

export const StyledCircle = attachThemeAttrs(styled.button)`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;
    transform: translate(-6px, -6px);
    padding: 0;
    margin: 0;
    border: 1px solid ${props => props.palette.border.divider};

    &:focus,
    &:active {
        outline: 0;
        border: 1px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }
`;
