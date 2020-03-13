import styled from 'styled-components';

const StyledUploadFileWrapper = styled.div`
    ${props =>
        props.isDragOver &&
        `
            width: 0;
            height: 0;
            overflow: hidden;
    `};
`;

export default StyledUploadFileWrapper;
