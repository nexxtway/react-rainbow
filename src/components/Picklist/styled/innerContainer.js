import styled from 'styled-components';

const StyledInnerContainer = styled.div`
    position: relative;
    ${props =>
        props.readOnly &&
        !props.disabled &&
        `
        :hover {
            cursor: text;
        }
    `}
`;

export default StyledInnerContainer;
