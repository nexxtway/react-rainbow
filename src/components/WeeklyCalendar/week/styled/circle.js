import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCircle = attachThemeAttrs(styled.div)`
    display: inline-block;
    position: absolute;
    top: -4px;
    background-color: ${props => props.palette.error.main};
    border-radius: 50%;
    content: "";
    height: 10px;
    width: 10px;
`;

export default StyledCircle;
