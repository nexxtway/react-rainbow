import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEvent = attachThemeAttrs(styled.div)`
    text-align: left;
    border: 1px solid ${props => props.palette.border.divider};
    border-left: 3px solid ${props => props.palette.brand.main};
    color: ${props => props.palette.text.main};
    background-color: ${props => props.palette.background.secondary};
    border-radius: 3px;
    padding: 0;
    padding-left: 2px;
    position: absolute;
    left: 2px;
    right: 2px;
    cursor: pointer;
`;

export default StyledEvent;
