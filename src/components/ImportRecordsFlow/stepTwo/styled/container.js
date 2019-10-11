import styled from 'styled-components';

const StyledContainer = styled.div`
    border-radius: 4px;
    border: dashed 1px #eaeef5;
    background-color: #fcfcfc;
    height: 260px;
    margin: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props => props.isDragOver && 'background-color: rgba(#cec6c6, 0.7);'};
`;

export default StyledContainer;
