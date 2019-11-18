import styled from 'styled-components';
import { COLOR_GRAY_1 } from '../../../styles/colors';
import { PADDING_X_SMALL } from '../../../styles/paddings';

const StyledSelectContent = styled.div`
    height: 100px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLOR_GRAY_1};
    border-radius: 8px;
    margin: 48px 12px 32px 12px;
    padding: ${PADDING_X_SMALL};

    @media (max-width: 600px) {
        width: 100%;
        margin: 56px 0 40px 0;
    }
`;

export default StyledSelectContent;
