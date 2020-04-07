import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledItem = attachThemeAttrs(styled.div)`
    position: relative;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.75rem;
    height: 45px;
    color: ${props => props.palette.text.main};
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;

    &[aria-disabled='true'] {
        color: ${props => props.palette.text.disabled};
        cursor: default;

        &:hover,
        &:focus {
            background-color: transparent;
        }
    }

    ${props =>
        props.isActive &&
        `
            background-color: ${props.palette.action.active};
        `};
`;

export default StyledItem;
