import styled from 'styled-components';

const StyledModalContainer = styled.div`
    ${props =>
        props.fileFieldsToAssign &&
        `
            margin-bottom: 100px;
        `};
`;

export default StyledModalContainer;
