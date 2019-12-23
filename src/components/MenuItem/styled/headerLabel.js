import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledHeaderLabel = styled.span.attrs(props => {
    const textSecondaryColor = getTheme(props).palette.text.secondary;

    return { textSecondaryColor };
})`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.25;
    color: ${props => props.textSecondaryColor};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
`;

export default StyledHeaderLabel;
