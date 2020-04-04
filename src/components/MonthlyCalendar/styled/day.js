import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDay = attachThemeAttrs(styled.div)`
    height: 100%;
    display: flex;
    flex-direction: column;

    ${props =>
        !props.disabled &&
        `
        :hover {
            background: ${props.palette.action.hover};
        }
    `}

    ${props =>
        props.isSelected &&
        `
        background: ${props.palette.background.secondary};
    `}
`;

export default StyledDay;
