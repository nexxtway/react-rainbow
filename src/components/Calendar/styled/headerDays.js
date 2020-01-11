import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledHeaderDays = styled.th.attrs(props => {
    const secondaryText = getTheme(props).palette.text.secondary;
    return { secondaryText };
})`
    text-align: center;
    color: ${props => props.secondaryText};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 40px;
    height: 40px;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledHeaderDays;
