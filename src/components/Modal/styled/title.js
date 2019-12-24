import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledTitle = styled.h1.attrs(props => {
    const textSecondary = getTheme(props).palette.text.secondary;
    return { textSecondary };
})`
    font-family: 'Lato Light', Arial, sans-serif;
    padding: 0;
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.textSecondary};
    margin: 0;
    font-weight: inherit;
`;

export default StyledTitle;
