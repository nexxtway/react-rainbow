import styled from 'styled-components';

const StyledMonthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    ${props =>
        props.variant === 'single' &&
        `
        margin-right: 12px
        `};
    ${props =>
        props.variant === 'double' &&
        `
        justify-content: stretch;
        
        & > h3 {
            flex: 1;
            text-align: center;
        }
        `};
`;

export default StyledMonthContainer;
