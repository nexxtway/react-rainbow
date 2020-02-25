import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledPaginationContainer = attachThemeAttrs(styled.div)`
    padding: ${PADDING_SMALL};
    background-color: ${props => props.palette.background.highlight};
    border-top: 1px solid ${props => props.palette.border.divider};
    border-bottom: 1px solid ${props => props.palette.border.divider};
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.paginationAlignment === 'right' &&
        `
            justify-content: flex-start;
            flex-direction: row-reverse;
        `};
    ${props =>
        props.paginationAlignment === 'left' &&
        `
            justify-content: flex-start;
        `};
`;

export default StyledPaginationContainer;
