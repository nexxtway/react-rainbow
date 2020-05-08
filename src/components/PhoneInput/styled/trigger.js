import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTrigger = attachThemeAttrs(styled.button)`
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    padding-left: .4rem;
    padding-right: 0;
    border: none;
    background: transparent;
    line-height: 1.5rem;
    color: ${props => props.palette.text.header};
    font-weight: 300;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    border-radius: ${BORDER_RADIUS_2} 0 0 ${BORDER_RADIUS_2};
    width: 6.5rem;
    display: flex;

    :hover,
    :focus,
    :active{
        text-decoration: none;
        outline: 0;
        background-color: ${props => props.palette.action.active};
    }

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled};
    `}

    > img {
        width: 24px;
        height: 24px;
    }
`;

export default StyledTrigger;
