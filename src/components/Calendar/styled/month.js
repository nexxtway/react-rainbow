import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledMonth = styled.h3.attrs(props => {
    const mainText = getTheme(props).palette.text.main;
    return { mainText };
})`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    color: ${props => props.mainText};
    text-transform: capitalize;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledMonth;
