import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_GRAY_1, COLOR_DARK_1 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledItem = styled.a`
    position: relative;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.75rem;
    height: 45px;
    color: ${COLOR_DARK_1};
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: ${COLOR_DARK_1};
    }

    &[aria-disabled='true'] {
        color: ${COLOR_GRAY_2};
        cursor: default;

        &:hover,
        &:focus {
            background-color: transparent;
        }
    }

    ${props =>
        props.isActive &&
        `
            background-color: ${COLOR_GRAY_1};
        `};
    ${props => props.isSelected && 'display: none;'}
`;

export default StyledItem;
