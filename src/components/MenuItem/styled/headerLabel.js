import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledHeaderLabel = styled.span.attrs(props => {
    const headerText = getTheme(props).palette.text.header;
    return { headerText };
})`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.25;
    color: ${props => props.headerText};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
`;

export default StyledHeaderLabel;
