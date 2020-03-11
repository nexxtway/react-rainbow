import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCVSFieldContainer = attachThemeAttrs(styled.span)`
    align-items: center;
    display: flex;
    color: ${props => props.palette.text.main};
    font-size: 14px;
`;

export default StyledCVSFieldContainer;
