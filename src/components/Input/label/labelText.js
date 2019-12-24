import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const Label = styled.label.attrs(props => {
    const textSecondary = getTheme(props).palette.text.secondary;
    return { textSecondary };
})`
    color: ${props => props.textSecondary};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: center;
    box-sizing: border-box;

    :empty {
        margin: 0;
    }

    ${props => props.readOnly && 'align-self: flex-start;'};
`;

export default Label;
