import styled from 'styled-components';
import { COLOR_DARK_1 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledDay = styled.td.attrs(props => {
    const textPrimary = getTheme(props).palette.text.primary;
    return { textPrimary };
})`
    text-align: center;
    color: ${props => props.textPrimary};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    border-radius: 100%;
    width: 38px;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledDay;
