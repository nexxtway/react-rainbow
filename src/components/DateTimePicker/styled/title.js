import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledTitle = styled.h2.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
`;

export default StyledTitle;
