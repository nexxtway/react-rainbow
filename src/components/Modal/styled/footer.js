import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledFooter = styled.footer.attrs(props => {
    const divider = getTheme(props).palette.border.divider;
    return { divider };
})`
    border-top: 0.0625px solid ${props => props.divider};
    padding: 0.75rem 1rem;
    flex-shrink: 0;
    display: block;
    box-sizing: border-box;
`;

export default StyledFooter;
