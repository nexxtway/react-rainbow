/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
    display: inline-flex;

    > span:first-child,
    > label:first-child > span {
        border-radius: 100px 0 0 100px;
    }

    > span:last-child,
    > label:last-child > span {
        border-radius: 0 100px 100px 0;
    }

    > span:only-child,
    > label:only-child > span {
        border-radius: 100px;
    }
`;

export default StyledButtonGroup;
