import styled from 'styled-components';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const StyledHeaderTitle = styled.h1.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};
    font-size: ${FONT_SIZE_HEADING_LARGE};
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
`;

export default StyledHeaderTitle;
