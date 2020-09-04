import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledSaturationContainer = attachThemeAttrs(styled.div)`
    position: relative;
    flex: 1 0 auto;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledSlidersContainer = styled.div`
    flex: 1 0 auto;
    margin-right: 15px;
    margin-top: 5px;
`;

export const StyledHexColorContainer = styled.div`
    flex: 0 3 auto;
`;

export const StyledRgbaColorContainer = styled.div`
    flex: 0 4 auto;
`;
