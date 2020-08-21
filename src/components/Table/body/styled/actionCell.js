import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledActionCell = attachThemeAttrs(styled.div)`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
    box-sizing: border-box;

    ${props =>
        props.theme.variant === 'listview' &&
        `
            background-color: ${props.palette.background.main};
        `};
`;

export default StyledActionCell;
