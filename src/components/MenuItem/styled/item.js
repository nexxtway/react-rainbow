import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_2, COLOR_DARK_1, COLOR_GRAY_1 } from '../../../styles/colors';

const StyledItem = styled.li`
    line-height: 1.5;

    > button {
        width: 100%;
        background: none;
        border: none;
        font: inherit;
        outline: inherit;
        margin: 0;
        transition: color 0.1s linear;
        position: relative;
        font-size: ${FONT_SIZE_TEXT_MEDIUM};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0.75rem;
        color: ${COLOR_DARK_1};
        white-space: nowrap;
        cursor: pointer;
        text-decoration: none;

        &:focus {
            outline: 0;
            background-color: ${COLOR_GRAY_1};
        }

        &:active {
            background-color: ${COLOR_GRAY_1};
            outline: 0;
        }

        &[aria-disabled='true'] {
            color: ${COLOR_GRAY_2};
            cursor: default;

            &:hover,
            &:focus {
                background-color: transparent;
                outline: 0;
            }
        }
    }
`;

export default StyledItem;
