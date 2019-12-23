import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import { getRainbowTheme } from '../../../styles/helpers/getTheme';

const StyledTitle = styled.h2.attrs(props => getRainbowTheme(props))`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 500;
    color: ${props => props.theme.rainbow.palette.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    padding: 0;
`;

export default StyledTitle;
