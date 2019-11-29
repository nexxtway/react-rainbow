import styled from 'styled-components';

const StyledAbbrHeader = styled.abbr`
    cursor: default;
    text-transform: capitalize;
    box-sizing: border-box;

    &[title] {
        border: 0;
        text-decoration: none;
        cursor: default;
        text-transform: capitalize;
    }
`;

export default StyledAbbrHeader;
