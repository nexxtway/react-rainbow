import styled from 'styled-components';

const StyledThead = styled.thead`
    ${props =>
        props.theme.hideTableHeader &&
        `
        visibility: hidden;
    `};
`;

export default StyledThead;
