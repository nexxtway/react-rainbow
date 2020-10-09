import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIndicator = attachThemeAttrs(styled.span)`
    position: absolute;
    left: ${props => props.indicatorStart}px;
    bottom: 0;
    height: 4px;
    width: ${props => props.indicatorWidth}px;
    border-radius: 10px;
    background-color: ${props => props.palette.brand.main};
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    @media (max-width: 600px) {
        height: 0;
        width: 0;
    }
`;

export default StyledIndicator;
