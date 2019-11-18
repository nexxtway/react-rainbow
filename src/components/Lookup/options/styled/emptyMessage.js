import styled from 'styled-components';
import { COLOR_DARK_1 } from '../../../../styles/colors';

const StyledEmptyMessage = styled.span`
    margin-top: 12px;
    width: 90%;
    font-size: 15px;
    color: #a4a7b5;
    line-height: 1.7;

    > span {
        color: ${COLOR_DARK_1};
        font-family: 'Lato Black', Arial, sans-serif;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default StyledEmptyMessage;
