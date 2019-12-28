/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: inline-flex;

    button {
        border-radius: 0;
        border-width: 1px;
        margin-left: -1px;

        &:focus {
            z-index: 1;
        }

        &:hover {
            z-index: 1;
        }
    }

    > button:first-child,
    > div:first-child > button {
        border-radius: 100px 0 0 100px;
    }

    > button:last-child,
    > div:last-child > button {
        border-radius: 0 100px 100px 0;
    }

    > button:only-child,
    > div:only-child > button {
        border-radius: 100px;
    }
`;

export default StyledContainer;
