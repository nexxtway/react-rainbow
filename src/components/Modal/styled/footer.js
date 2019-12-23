import styled from 'styled-components';
import { getRainbowTheme } from '../../../styles/helpers/getTheme';

const StyledFooter = styled.footer.attrs(props => getRainbowTheme(props))`
    border-top: 0.0625px solid ${props => props.theme.rainbow.palette.divider};
    padding: 0.75rem 1rem;
    flex-shrink: 0;
    display: block;
    box-sizing: border-box;
`;

export default StyledFooter;
