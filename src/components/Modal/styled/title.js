import styled from 'styled-components';
import { getRainbowTheme } from '../../../styles/helpers/getTheme';

const StyledTitle = styled.h1.attrs(props => getRainbowTheme(props))`
    font-family: 'Lato Light', Arial, sans-serif;
    padding: 0;
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.theme.rainbow.palette.text.secondary};
    margin: 0;
    font-weight: inherit;
`;

export default StyledTitle;
