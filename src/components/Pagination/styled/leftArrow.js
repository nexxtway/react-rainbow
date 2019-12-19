import styled from 'styled-components';
import LeftArrow from '../leftArrow';
import getTheme from '../../../styles/helpers/getTheme';

const StyledLeftArrow = styled(LeftArrow)`
    color: ${props => getTheme(props).palette.brand.main};
`;

export default StyledLeftArrow;
