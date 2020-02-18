import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledItem = attachThemeAttrs(styled.div)`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 48px;
    padding: 0 1.15rem 0 1.15rem;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    ${props =>
        props.isActive &&
        `
            background-color: ${props.palette.action.active};
    `}
`;

export default StyledItem;
