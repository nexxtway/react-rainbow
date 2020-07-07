import styled from 'styled-components';

const StyledInnerContainer = styled.div`
    position: relative;

    ${props =>
        props.readOnly &&
        `
        :hover {
            cursor: text;
        }
    `}
`;

export default StyledInnerContainer;
