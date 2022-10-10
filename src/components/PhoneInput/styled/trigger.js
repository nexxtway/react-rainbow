import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTrigger = attachThemeAttrs(styled.button)`
    flex: 0 0 auto;
    padding-left: 4px;
    padding-right: 0;
    border: none;
    background: transparent;
    line-height: 1.5rem;
    color: ${props => props.palette.text.header};
    font-weight: 300;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    border-radius: ${BORDER_RADIUS_2} 0 0 ${BORDER_RADIUS_2};

    :hover,
    :focus,
    :active{
        text-decoration: none;
        outline: 0;
        background-color: ${props => props.palette.action.active};
    }

    &[disabled] {
        cursor: not-allowed;
        user-select: none;

        &:focus,
        &:active {
            background-color: transparent;
        }
    }

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled};
    `}
`;

export default StyledTrigger;
