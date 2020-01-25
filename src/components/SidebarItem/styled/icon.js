import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledIcon = attachThemeAttrs(styled.div)`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;

    :hover,
    :active,
    :focus {
        background-color: ${props => props.palette.action.hover};
        outline: 0;
    }

    ${props =>
        props.isSelected &&
        `
        background-color: ${props.palette.action.active};
            outline: 0;
        `};
`;

export default StyledIcon;
