import styled from 'styled-components';

const StyledSelectedValueContainer = styled.div`
    position: relative;
    ${props =>
        props.readOnly &&
        `
            display: flex;
        `};
`;

export default StyledSelectedValueContainer;
