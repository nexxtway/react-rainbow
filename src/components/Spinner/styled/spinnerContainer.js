import styled from 'styled-components';
import { zindexSpinner } from '../../../styles/z-index';

const StyledSpinnerContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${zindexSpinner};
    transform: translate(-50%, -50%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0;
    color: #ddd;
`;

export default StyledSpinnerContainer;
