import styled from 'styled-components';

const StyledSortArrowIcon = styled.svg`
    flex-shrink: 0;
    visibility: hidden;
    margin-left: 12px;
    ${props =>
        props.arrowAscendent &&
        `
            transform: rotate(-180deg);
        `};
`;

export default StyledSortArrowIcon;
