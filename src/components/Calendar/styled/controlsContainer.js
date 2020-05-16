import styled from 'styled-components';

const StyledControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 8px 0;

    ${props =>
        props.variant === 'double' &&
        `
            align-items: flex-end;
            justify-content: stretch;
            flex-direction: column;

            & > div:nth-child(1) {
                order: 1;
                width: 100%;
            }

            & > div:nth-child(2) {
                padding: 0 8px 8px 0;
            }
        `};
`;

export default StyledControlsContainer;
