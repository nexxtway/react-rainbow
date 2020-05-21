import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const sizeMap = { large: '210px', medium: '142px', small: '100px' };
const StyledContent = attachThemeAttrs(styled.span)`
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

export default StyledContent;
