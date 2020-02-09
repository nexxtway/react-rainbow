import styled from 'styled-components';

const StyledControls = styled.div`
    height: 100%;
    width: 100%;
    pointer-events: none;
    position: absolute;

    > * {
        pointer-events: auto;
    }
`;

export default StyledControls;
