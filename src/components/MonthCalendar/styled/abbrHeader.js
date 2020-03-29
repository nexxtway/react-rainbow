import styled from 'styled-components';

const StyledAbbrHeader = styled.abbr`
    cursor: default;
    text-transform: uppercase;
    box-sizing: border-box;

    &[title] {
        border: 0;
        text-decoration: none;
        cursor: default;
        text-transform: uppercase;
    }
`;

export default StyledAbbrHeader;
