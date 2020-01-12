import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const LabelText = styled.span.attrs(props => {
    const text = getTheme(props).palette.text;
    const mainText = text.main;
    const disabledText = text.header;
    return {
        mainText,
        disabledText,
    };
})`
    display: inline;
    vertical-align: middle;
    color: ${props => props.mainText};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.65rem;
    ${props => props.disabled && `color: ${props.disabledText};`};
`;

export default LabelText;
